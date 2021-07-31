const controller = {};
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const keyJWT = require("../config/jwtConfig");
app.set("key", keyJWT.key);
const { json } = require("express");
const clientModel = require("../models/clientModel");
const projectModel = require("../models/projectModel");
const ticketModel = require("../models/ticketModel");

const obj = {
  name: "name",
  lastname: "lastname",
  new: "new ",
};

controller.logout = (req, res) => {
  jwt.verify(req.headers.authorization, app.get("key"), function (err, user) {
    if (err) {
      res.status(401).send({
        error: "Token inválido",
      });
    } else {
      jwt.destroy(req.headers.authorization);
      res.status(200).send({
        state: "logout",
      });
    }
  });
};
controller.clients = async (req, res) => {
  jwt.verify(req.headers.authorization, app.get("key"), function (err, user) {
    if (err) {
      res.status(401).send({
        error: "Token inválido",
      });
    } else {
      clientModel.find().then((data) => {
        res.send(data);
      });
    }
  });
};
controller.projects = async (req, res) => {
  jwt.verify(req.headers.authorization, app.get("key"), function (err, user) {
    if (err) {
      res.status(401).send({
        error: "Token inválido",
      });
    } else {
      clientModel.find().then((data) => {
        res.send(data);
      });
    }
  });
};
controller.login = (req, res) => {
  console.log(req.body);
  const payload = {
    check: true,
  };
  const token = jwt.sign(payload, app.get("key"), {
    expiresIn: 1120,
  });
  res.json({
    mensaje: "Autenticación correcta",
    token: token,
  });
};

module.exports = controller;
