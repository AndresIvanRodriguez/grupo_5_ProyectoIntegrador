const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.listen(3001, () => console.log("Conexión exitosa"));


app.get("/home", (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")));
app.get("/producto", (req, res) => res.sendFile(path.resolve(__dirname, "./views/producto.html")));
app.get("/registro", (req, res) => res.sendFile(path.resolve(__dirname, "./views/register.html")));
app.get("/login", (req, res) => res.sendFile(path.resolve(__dirname, "./views/login.html")));

