const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// ============================================
// CORS CONFIGURATION - VERY IMPORTANT!
// ============================================
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://devops-project-2-85kl.onrender.com',     // Your frontend
             // If you have this too
  ],
  credentials: true
}));

app.use(express.json());

// ============================================
// ROUTES
// ============================================

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

// Get all users
app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'John Doe', role: 'admin' },
      { id: 2, name: 'Jane Smith', role: 'user' }
    ]
  });
});

// Your other routes...

// ============================================
// START SERVER
// ============================================
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;