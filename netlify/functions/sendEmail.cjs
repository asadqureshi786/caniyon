const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Validation: Check if any field is missing
    if (!name || !email || !subject || !message) {
  const fieldErrors = {};
  if (!name) fieldErrors.name = 'Name is required';
  if (!email) fieldErrors.email = 'Email is required';
  if (!subject) fieldErrors.subject = 'Subject is required';
  if (!message) fieldErrors.message = 'Message is required';

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: 'Validation failed',
      fields: fieldErrors,
    }),
  };
}

    const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: 'mak@caniyon.com', // Replace with your Gmail
        pass: 'Google2232@', // Use App Password
      },

    });

  const mailOptions = {
      from: 'mak@caniyon.com',
      to: 'makhan6342@gmail.com',
      to: 'mak@caniyon.com',
      subject: subject || `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: 'An error occurred while sending the email.',
        details: error.toString(),
      }),
    };
  }
};
