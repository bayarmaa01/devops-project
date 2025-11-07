import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow frontend hosted on Render + localhost to access
app.use(cors({
  origin: [
    "https://saas-frontend-0vfa.onrender.com", // frontend Render URL
    "http://localhost:5173" // local dev
  ],
  credentials: true
}));

// ✅ Health route for frontend to check API status
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.NODE_ENV || "production",
    uptime: process.uptime(),
    version: "1.0.0"
  });
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Backend API is running successfully 🚀");
});

export default app;
