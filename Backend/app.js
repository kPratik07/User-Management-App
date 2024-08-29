const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors()); // Ensure CORS is applied before routes
app.use(express.json()); // Middleware to parse JSON

// Routes
app.use("/api", userRoutes);

module.exports = app;
