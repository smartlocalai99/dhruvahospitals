import nodemailer from 'nodemailer';

const recipient = process.env.APPOINTMENT_RECIPIENT_EMAIL || 'dhruvahospitalkadapa@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { firstName, lastName, email, phone, symptoms } = req.body || {};

  if (!firstName || !lastName || !phone || !symptoms) {
    return res.status(400).json({ error: 'Please complete all required fields.' });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    return res.status(500).json({ error: 'Email service is not configured yet.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
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
        '',
        'Symptoms / Reason for Appointment:',
        symptoms,
        '',
        'Submitted from Dhruva Hospitals website.',
      ].join('\n'),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Appointment email failed:', error);
    return res.status(500).json({ error: 'We could not send your request. Please try again.' });
  }
}
