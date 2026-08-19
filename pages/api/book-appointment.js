import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      symptoms,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !phone || !symptoms) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields.',
      });
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to hospital
    await transporter.sendMail({
      from: `"Dhruva Hospitals Website" <${process.env.SMTP_USER}>`,
      to: 'dhruvahospitalkadapa@gmail.com',
      replyTo: email || process.env.SMTP_USER,
      subject: `New Appointment Request - ${firstName} ${lastName}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">

          <h2 style="color: #123B63;">
            New Appointment Request
          </h2>

          <p>
            A patient has submitted an appointment request through the
            Dhruva Hospitals website.
          </p>

          <hr />

          <h3>Patient Details</h3>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">
                First Name
              </td>
              <td style="padding: 8px;">
                ${escapeHtml(firstName)}
              </td>
            </tr>

            <tr>
              <td style="padding: 8px; font-weight: bold;">
                Last Name
              </td>
              <td style="padding: 8px;">
                ${escapeHtml(lastName)}
              </td>
            </tr>

            <tr>
              <td style="padding: 8px; font-weight: bold;">
                Email
              </td>
              <td style="padding: 8px;">
                ${escapeHtml(email || 'Not provided')}
              </td>
            </tr>

            <tr>
              <td style="padding: 8px; font-weight: bold;">
                Contact Number
              </td>
              <td style="padding: 8px;">
                ${escapeHtml(phone)}
              </td>
            </tr>
          </table>

          <h3 style="margin-top: 25px;">
            Symptoms / Reason for Appointment
          </h3>

          <div
            style="
              background: #f5f7fa;
              padding: 15px;
              border-radius: 8px;
              white-space: pre-wrap;
            "
          >
            ${escapeHtml(symptoms)}
          </div>

          <hr style="margin-top: 30px;" />

          <p style="font-size: 13px; color: #666;">
            This appointment request was submitted from the
            Dhruva Hospitals website.
          </p>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Appointment request sent successfully.',
    });
  } catch (error) {
    console.error('Appointment email error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to send appointment request.',
    });
  }
}

// Prevent HTML injection in email content
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}