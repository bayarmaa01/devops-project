import express from 'express';
import cors from 'cors';

const app = express();

// ============================================
// CORS CONFIGURATION - VERY IMPORTANT!
// ============================================
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:4173',
      'https://devops-project-2-85kl.onrender.com'
    ],
    credentials: true,
  })
);

app.use(express.json());

// ============================================
// ROUTES
// ============================================
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
  });
});

export default app;
