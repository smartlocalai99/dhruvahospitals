import nodemailer from 'nodemailer';
import { bookableDoctors, departments } from '@/lib/data';

const recipient = process.env.APPOINTMENT_RECIPIENT_EMAIL || 'dhruvahospitalkadapa@gmail.com';

export const config = {
  api: { bodyParser: { sizeLimit: '20kb' } },
};

// Basic per-IP rate limit (best effort; resets when the server instance restarts).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  if (requestLog.size > 5000) requestLog.clear();
  return recent.length > MAX_REQUESTS;
}

function clean(value, maxLength, { multiline = false } = {}) {
  if (typeof value !== 'string') return '';
  const text = multiline ? value.replace(/\r\n?/g, '\n') : value.replace(/[\r\n\t]+/g, ' ');
  return text.trim().slice(0, maxLength);
}

const doctorNames = new Set(bookableDoctors.map((doctor) => doctor.name));
const departmentNames = new Set(departments);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};

  // Honeypot field: real visitors never fill it in.
  if (clean(body.website, 200)) {
    return res.status(200).json({ success: true });
  }

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown')
    .split(',')[0]
    .trim();
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a few minutes.' });
  }

  const firstName = clean(body.firstName, 60);
  const lastName = clean(body.lastName, 60);
  const email = clean(body.email, 120);
  const phone = clean(body.phone, 20);
  const symptoms = clean(body.symptoms, 2000, { multiline: true });
  const department = departmentNames.has(body.department) ? body.department : '';
  const doctor = doctorNames.has(body.doctor) ? body.doctor : '';

  if (!firstName || !lastName || !phone || !symptoms) {
    return res.status(400).json({ error: 'Please complete all required fields.' });
  }

  const phoneDigits = phone.replace(/\D/g, '');
  if (!/^[0-9+()\-\s]+$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    return res.status(400).json({ error: 'Please enter a valid contact number.' });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('Appointment email is not configured: set SMTP_HOST, SMTP_USER and SMTP_PASSWORD.');
    return res.status(503).json({ error: 'Online booking is temporarily unavailable.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: email || undefined,
      subject: `New Appointment Request - ${firstName} ${lastName}`,
      text: [
        'New Appointment Request',
        '',
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Email: ${email || 'Not provided'}`,
        `Contact Number: ${phone}`,
        `Department: ${department || 'Not specified'}`,
        `Preferred Doctor: ${doctor || 'Any available doctor'}`,
        '',
        'Symptoms / Reason for Appointment:',
        symptoms,
        '',
        `Submitted from the Dhruva Hospitals website on ${submittedAt} (IST).`,
      ].join('\n'),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Appointment email failed:', error);
    return res.status(500).json({ error: 'We could not send your request. Please try again.' });
  }
}
