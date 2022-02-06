const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const methodOverride = require("method-override");
const publicPath = path.resolve(__dirname,'./public');

const app = express();
app.use(express.static("public"));

//Habilitar metodos PUT DELETE y PATCH
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Establecer EJS como motor de plantilla
app.set("view engine", "ejs");
app.set("views", "./src/views");

//RUTAS
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);
const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);
const usersRoutes = require("./routes/usersRoutes");
app.use("/users", usersRoutes);

//Servidor
app.listen(process.env.PORT || 3001, () =>console.log("Servidor Corriendo en Puerto 3000"));

//Error 404
app.use((req, res, next) => {
    res.status(404).render("./users/not-found");
});

module.exports = app;