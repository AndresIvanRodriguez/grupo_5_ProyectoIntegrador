const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3001, () => console.log("Conexión exitosa"));


app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./views/register.html")));
app.get("/product", (req, res) => res.sendFile(path.resolve(__dirname, "./views/producto.html")));

