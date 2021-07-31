const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const clientModel = require("../models/clientModel");
const uri =
  "mongodb+srv://srcaAdmin2021:srcaAdmin2021+@srcamongodb.aadmf.mongodb.net/srcaDB?retryWrites=true&w=majority";

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
