const express = require("express");
const app = express();

const obj = {
  name: "name",
  lastname: "lastname",
  new: "new ",
};
const clientes = [
  {
    id: "cwfweq121edqd",
    nombre: "gabriel rodriguez",
    fecha: "12-02-21",
    image: "imagenURI",
    telefono: "3317473102",
    mail: "correo@mail.com",
  },
  {
    id: "cwfw67781ssewad",
    nombre: "alfonso rodriguez",
    fecha: "21-5-19",
    image: "imagenURI2",
    telefono: "332222222",
    mail: "correo2@mail.com",
  },
  {
    id: "cwfw1092872ssewad",
    nombre: "alfonso angeles",
    fecha: "01-07-16",
    image: "imagenURI3",
    telefono: "888882222",
    mail: "correo4@mail.com",
  },
  {
    id: "lañapsm2ssewad",
    nombre: "gabriel angeles",
    fecha: "31-10-12",
    image: "imagenURI4",
    telefono: "666682222",
    mail: "correo5@mail.com",
  },
];

app.listen(5000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  console.log("datos: \n " + req);
  res.json(obj);
});

app.get("/clients", (req, res) => {
  res.send(clientes);
});
