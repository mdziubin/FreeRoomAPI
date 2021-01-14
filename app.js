// Package Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("./middleware/cors");

// Route Imports
const testRoutes = require("./routes/test");
const locationRoutes = require("./routes/locations");
const scheduleRoutes = require("./routes/schedule");

const app = express();
const port = 3000;

// Middleware to parse req bodies and deal with CORS
app.use(bodyParser.json());
app.use(cors);

app.use("/test", testRoutes);
app.use("/locations", locationRoutes);
app.use("/schedule", scheduleRoutes);
app.use((req, res) => {
  console.log("Request to non-existant route " + req.url + " 404ed");
  res.status(404).json({ message: "Route not found" });
});

// Error Middleware
app.use((error, _req, res, _next) => {
  console.log(error);
  const status = error.status || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
