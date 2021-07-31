const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const clientModel = require("../models/clientModel");
console.log(process.env.MONGOPASSWORD);
const uri =
  "mongodb+srv://" +
  process.env.MONGOUSER +
  ":" +
  process.env.MONGOPASSWORD +
  "@srcamongodb.aadmf.mongodb.net/srcaDB?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("BD Conectada");
    const client = new clientModel({
      name: "2222",
      phone: "dddd",
      mail: "dddd",
      web: "ddd",
      image: "dd",
      date: new Date(),
    });
    client.save().then(() => {
      console.log("se hoz");
    });
  });
