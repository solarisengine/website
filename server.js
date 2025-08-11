/* eslint-disable no-undef */

import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Setup Nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  });
};

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

  try {
    console.log('Sending email via Gmail...');
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: [
        process.env.TO_GABRIEL,
        process.env.TO_BRUNO,
        process.env.TO_CASEY,
      ].join(','),
      subject: 'Inbound Lead',
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${
        company || 'Not provided'
      }\nDetails: ${details}`,
      replyTo: email,
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    
    res.status(200).json({ 
      message: 'Thank you! Your message has been sent successfully.' 
    });
  } catch (err) {
    console.error('Email sending error:', err);
    
    // Log the inquiry so you don't lose the lead
    console.log('=== CONTACT FORM SUBMISSION (Email Failed) ===');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company || 'Not provided'}`);
    console.log(`Details: ${details}`);
    console.log(`Timestamp: ${new Date().toLocaleString()}`);
    console.log('=============================================');
    
    // Still return success to user - they don't need to know about email issues
    res.status(200).json({ 
      message: 'Thank you! Your message has been received and we will get back to you soon.' 
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
