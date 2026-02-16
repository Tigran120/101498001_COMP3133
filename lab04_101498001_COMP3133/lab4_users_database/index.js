require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 8081;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/lab4_users_db';

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>Lab 4 Users API</h1>
    <p>Server is running. Use <strong>Postman</strong> to test the API.</p>
    <p><strong>POST</strong> <code>http://localhost:${PORT}/users</code></p>
    <p>Body (raw JSON): username, email, city, website, zipCode, phone</p>
  `);
});

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: saved,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = {};
      Object.keys(err.errors).forEach((key) => {
        errors[key] = err.errors[key].message;
      });
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: { email: 'Email must be unique' },
      });
    }
    res.status(500).json({
      success: false,
      message: err.message || 'Server error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
