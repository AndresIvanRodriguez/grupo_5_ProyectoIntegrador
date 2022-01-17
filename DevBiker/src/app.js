const express = require('express');
const app = express();

const res = require('express/lib/response');

const path = require('path');
const publicPath = path.resolve(__dirname,'./public');

app.use(express.static("public"));

const homeRouter = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", "./src/views");
//RUTAS
app.use(homeRouter);
//Servidor
app.listen(process.env.PORT || 3000, () =>console.log("Servidor Corriendo en Puerto 3000"));