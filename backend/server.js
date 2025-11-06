import express from "express";
const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: "production",
    uptime: process.uptime(),
    version: "1.0.0",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
