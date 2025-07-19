/* eslint-disable no-undef */

import sgMail from '@sendgrid/mail';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Setup SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Initialize Express
const app = express();
app.use(cors());
app.use(json());

// Serve frontend (from client/dist)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientBuildPath = path.join(__dirname, 'client', 'dist');

app.use(express.static(clientBuildPath));

app.use((req, res, next) => {
  if (
    req.hostname === 'solarisengine.com' ||
    req.hostname === 'solarisengine.ai' ||
    req.hostname === 'www.solarisengine.ai'
  ) {
    return res.redirect(301, `https://www.solarisengine.com${req.url}`);
  }
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// API Route
app.post('/api/contact', async (req, res) => {
  const { name, email, company, details } = req.body;

  const msg = {
    to: [
      process.env.SENDGRID_TO_GABRIEL,
      process.env.SENDGRID_TO_BRUNO,
      process.env.SENDGRID_TO_CASEY,
    ],
    from: process.env.SENDGRID_FROM,
    subject: 'Inbound Lead',
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

// Fallback to index.html for client-side routes
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Use Azure-provided port or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
