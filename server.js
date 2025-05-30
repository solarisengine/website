/* eslint-disable no-undef */

import sgMail from '@sendgrid/mail';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(cors());
app.use(json());

app.post('/api/contact', async (req, res) => {
  const { name, email, company, details } = req.body;

  const msg = {
    to: 'bruno@solarisengine.com', // Change to your recipient
    from: process.env.SENDGRID_FROM, // Must be a verified sender in SendGrid
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nDetails: ${details}`,
    replyTo: email,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send email', error: err });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
