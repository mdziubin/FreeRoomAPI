const express = require("express");
const bodyParser = require("body-parser");
const cors = require("./middleware/cors");

const app = express();
const port = 3000;

// Middleware to parse req bodies and deal with CORS
app.use(bodyParser.json());
app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
