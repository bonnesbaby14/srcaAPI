const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const clientModel = require("../models/clientModel");
const projectModel = require("../models/projectModel");
const ticketModel = require("../models/ticketModel");
console.log(process.env.MONGOUSER);
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
    // const client = new clientModel({
    //   name: "2222",
    //   phone: "dddd",
    //   mail: "dddd",
    //   web: "ddd",
    //   image: "dd",
    //   date: new Date(),
    // });
    // const project = new projectModel({
    //   name: "ddd",
    //   description: "ddd",
    //   precio: 22,
    //   date_start: new Date(),
    //   date_finish: new Date(),

    //   id_client: "sssdd",
    // });
    // const ticket = new ticketModel({
    //   date: new Date(),

    //   payment: "visa",
    //   import: 222,
    //   signature: "link",
    //   id_client: "ddddd",
    //   id_project: "jsjjss",
    // });
    // ticket.save().then(() => {
    //   console.log("se registro el ticket");
    // });
    // project.save().then(() => {
    //   console.log("se registro el proyecto");
    // });
    // client.save().then(() => {
    //   console.log("se registro el cliente");
    // });

    // clientModel.find().then((data) => {
    //   console.log(data);
    // });
  })
  .catch((err) => {
    console.log("hubo un errror en la conexion: " + err);
  });
