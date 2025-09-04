import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config()

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log("Database connected");
    } 
).catch((err) => {
    console.log("Database connection error: ", err);
});

const app = express();
const PORT = 3000;

// Default route
app.get("/", (req, res) => {
  res.send("✅ Server is running on port 3000");
});

// Start server
app.listen(3000, () => {
  console.log(`🚀 Server is running on http://localhost:${3000}`);
});
