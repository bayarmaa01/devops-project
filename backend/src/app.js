// Import dependencies
const express = require('express');
const cors = require('cors');

// Initialize app
const app = express();

// Middleware setup
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://devops-project-2-85kl.onrender.com' // Your frontend URL
  ],
  credentials: true
}));

// Add your routes here (optional)
// app.use('/api', require('./routes/yourRoute'));

// Export app if used in another file
module.exports = app;
