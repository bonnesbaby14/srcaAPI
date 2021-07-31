const express = require("express");
const app = express();
require("./config/mongoconfig");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routecustomer = require("./routes/customer");

//provisional en localhost
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", routecustomer);

app.listen(5000, () => {
  console.log("Server running on port 3000");
});
