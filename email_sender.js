const nodemailer = require('nodemailer');

function sendEmail(to, subject, text) {
  // Create a nodemailer transporter object
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true,
    auth: {
      user: 'your_email@example.com',
      pass: 'your_email_password'
    }
  });

  // Define the email options
  let mailOptions = {
    from: 'your_email@example.com',
    to: to,
    subject: subject,
    text: text
  };

  // Send the email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });