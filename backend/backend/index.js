import express from "express";

const app = express();
const PORT = 3000;

// Default route
app.get("/", (req, res) => {
  res.send("✅ Server is running on port 3000");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

