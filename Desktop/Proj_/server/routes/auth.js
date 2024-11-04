const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require( 'jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const router = express.Router();
const { JWT_SECRET, EMAIL_USER, EMAIL_PASS } = process.env;

// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Signup Endpoint with Email Verification
router.post('/signup', async (req, res) => {
  const { name, email, password, role, department, semester, rollNumber } = req.body;
  try {
    if (role === 'Student' && semester !== 7) {
      return res.status(400).json({ message: 'Only 7th semester students can signup.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists.' });

    const newUser = new User({ name, email, password, role, department, semester, rollNumber });
    await newUser.save();

    // Send verification email
    const verificationToken = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
    const url = `${req.protocol}://${req.get('host')}/api/auth/verify-email/${verificationToken}`;

    await transporter.sendMail({
      from: EMAIL_USER,
      to: email,
      subject: 'Verify Your Email',
      html: `<p>Please click <a href="${url}">here</a> to verify your email address.</p>`
    });

    res.status(200).json({ success: true, message: 'Signup successful! Check your email for verification.' });
  } catch (error) {
    res.status(500).json({ message: 'Signup failed!' });
  }
});

// Email Verification Endpoint
router.get('/verify-email/:token', async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, JWT_SECRET);
    await User.findByIdAndUpdate(decoded.id, { isVerified: true });
    res.redirect('/login'); // Redirect to login after verification
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
});

// Login Endpoint with Role-Based Redirect
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    if (!user.isVerified) return res.status(400).json({ message: 'Please verify your email first' });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ success: true, role: user.role, token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed!' });
  }
});

// Forgot Password Endpoint
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const resetToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });
    const url = `${req.protocol}://${req.get('host')}/api/auth/reset-password/${resetToken}`;

    await transporter.sendMail({
      from: EMAIL_USER,
      to: email,
      subject: 'Password Reset',
      html: `<p>Click <a href="${url}">here</a> to reset your password. This link is valid for 15 minutes.</p>`
    });

    res.status(200).json({ message: 'Password reset link sent to your email.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send reset link.' });
  }
});

// Reset Password Endpoint
router.post('/reset-password/:token', async (req, res) => {
  const { password } = req.body;
  try {
    const decoded = jwt.verify(req.params.token, JWT_SECRET);
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });
    res.status(200).json({ message: 'Password reset successful.' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
});

module.exports = router;
