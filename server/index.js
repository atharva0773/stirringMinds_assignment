const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");

// Routes
const authRoutes = require("./routes/auth.route.js");
const dealRoutes = require("./routes/deal.route.js");
const claimRoutes = require("./routes/claim.route.js");

const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/claims", claimRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API running successfully" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
