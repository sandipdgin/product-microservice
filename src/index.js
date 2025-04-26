const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
connectDB();

// Routes
app.use("/api/products", productRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Product Microservice running at http://localhost:${PORT}`);
});