const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const app = express();
const Database = require("./config/db");

// Load environment variables
dotenv.config();

//datavase connecion
Database();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
