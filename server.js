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

// Configure CORS more explicitly
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5000',
      'https://solarisengine.com',
      'https://www.solarisengine.com',
      'https://solarisengine.ai',
      'https://www.solarisengine.ai',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(json({ limit: '10mb' }));

// Serve frontend (from client/dist)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientBuildPath = path.join(__dirname, 'client', 'dist');

app.use(express.static(clientBuildPath));

// Domain redirect middleware - but exclude API routes
app.use((req, res, next) => {
  // Skip redirects for API routes
  if (req.path.startsWith('/api/')) {
    return next();
  }

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
  console.log('Contact form submission received:', {
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
  });

  const { name, email, company, details } = req.body;

  // Validate required fields
  if (!name || !email || !details) {
    console.log('Missing required fields');
    return res
      .status(400)
      .json({
        message:
          'Missing required fields: name, email, and details are required',
      });
  }

  const msg = {
    to: [
      process.env.SENDGRID_TO_GABRIEL,
      process.env.SENDGRID_TO_BRUNO,
      process.env.SENDGRID_TO_CASEY,
    ],
    from: process.env.SENDGRID_FROM,
    subject: 'Inbound Lead',
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${
      company || 'Not provided'
    }\nDetails: ${details}`,
    replyTo: email,
  };

  try {
    console.log('Attempting to send email via SendGrid...');
    const result = await sgMail.send(msg);
    console.log('Email sent successfully:', result[0].statusCode);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('SendGrid error:', err);
    console.error('Error details:', err.response?.body || err.message);
    res.status(500).json({
      message: 'Failed to send email',
      error:
        process.env.NODE_ENV === 'development'
          ? err.message
          : 'Internal server error',
    });
  }
});

// Fallback to index.html for client-side routes
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Use Azure-provided port or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
