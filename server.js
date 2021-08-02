const express = require("express");
const app = express();
const cors = require("cors");
require("./config/mongoconfig");

const bodyParser = require("body-parser");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routecustomer = require("./routes/customer");

app.use("/", routecustomer);

app.listen(5000, () => {
  console.log("Server running on port 3000");
});
