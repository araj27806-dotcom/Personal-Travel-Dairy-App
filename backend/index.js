import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

// Load environment variables from .env file
dotenv.config()

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log("Database is connected");
    } 
).catch((err) => {
    console.log("Database connection is error: ", err);
});

const app = express();

// Middleware to parse JSON requests
app.use(express.json());


// Default route
app.get("/", (req, res) => {
  res.send("✅ Server is running on port 3000");
});

app.use("/api/auth", authRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
