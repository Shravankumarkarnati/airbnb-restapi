const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

const airbnbRoutes = require("./routes/airbnb");
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(airbnbRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
