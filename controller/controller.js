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
      projectModel.find().then((data) => {
        res.send(data);
      });
    }
  });
};

controller.tickets = async (req, res) => {
  jwt.verify(req.headers.authorization, app.get("key"), function (err, user) {
    if (err) {
      res.status(401).send({
        error: "Token inválido",
      });
    } else {
      ticketModel.find().then((tickets) => {
        clientModel.find().then((clients) => {
          projectModel.find().then((projects) => {
            res.send({
              tickets: tickets,
              clients: clients,
              projects: projects,
            });
          });
        });
      });
    }
  });
};
controller.login = (req, res) => {
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

controller.upClient = async (req, res) => {
  jwt.verify(req.headers.authorization, app.get("key"), function (err, user) {
    if (err) {
      res.status(401).send({
        error: "Token inválido",
      });
    } else {
      if (
        req.body.name === "" ||
        req.body.phone === "" ||
        req.body.mail === "" ||
        req.body.website === ""
      ) {
        console.log("entro algo ");
        res.json({ error: "errorData" });
      } else {
        const data = new clientModel({
          name: req.body.name,
          phone: req.body.phone,
          mail: req.body.mail,
          website: req.body.website,
          image: "noimage ",
          date: new Date(),
        });
        data.save((err) => {
          err
            ? res.json({ error: "errorSave" })
            : res.json({ error: "noError" });
        });
      }
    }
  });
};
controller.upProject = async (req, res) => {
  jwt.verify(req.headers.authorization, app.get("key"), function (err, user) {
    if (err) {
      res.status(401).send({
        error: "Token inválido",
      });
    } else {
      if (
        req.body.name === "" ||
        req.body.description === "" ||
        req.body.price === "" ||
        req.body.date1 === "" ||
        req.body.id_client === ""
      ) {
        console.log("entro algo ");
        res.json({ error: "errorData" });
      } else {
        const data = new projectModel({
          name: req.body.name,
          description: req.body.description,
          precio: req.body.price,
          date_start: req.body.date1,
          date_finish: req.body.date2 || "",
          id_client: req.body.id_client,
        });
        data.save((err) => {
          console.log(err);
          err
            ? res.json({ error: "errorSave" })
            : res.json({ error: "noError" });
        });
      }
    }
  });
};
controller.upTicket = async (req, res) => {
  console.table(req.body);
  jwt.verify(req.headers.authorization, app.get("key"), function (err, user) {
    if (err) {
      res.status(401).send({
        error: "Token inválido",
      });
    } else {
      if (
        req.body.date1 === "" ||
        req.body.payment === "" ||
        req.body._import === "" ||
        req.body.signature === "" ||
        req.body.id_client === "" ||
        req.body.id_project === ""
      ) {
        console.log("entro algo ");
        res.json({ error: "errorData" });
      } else {
        const data = new ticketModel({
          date: req.body.date1,
          payment: req.body.payment,
          _import: req.body._import,
          signature: req.body.signature,
          id_client: req.body.id_client,
          id_project: req.body.id_project,
        });
        data.save((err) => {
          err
            ? res.json({ error: "errorSave" })
            : res.json({ error: "noError" });
        });
      }
    }
  });
};
controller.updateTicket = async (req, res) => {
  jwt.verify(req.headers.authorization, app.get("key"), function (err, user) {
    if (err) {
      res.status(401).send({
        error: "Token inválido",
      });
    } else {
      if (
        req.body._id === "" ||
        req.body.date1 === "" ||
        req.body.payment === "" ||
        req.body._import === "" ||
        req.body.signature === "" ||
        req.body.id_client === "" ||
        req.body.id_project === ""
      ) {
        res.json({ error: "errorData" });
      } else {
        const id = req.body._id;
        ticketModel.updateOne(
          { _id: id },
          {
            date: req.body.date1,
            payment: req.body.payment,
            _import: req.body._import,
            signature: req.body.signature,
            id_client: req.body.id_client,
            id_project: req.body.id_project,
          },
          (err) => {
            err
              ? res.json({ error: "errorSave" })
              : res.json({ error: "noError" });
          }
        );
      }
    }
  });
};
module.exports = controller;
