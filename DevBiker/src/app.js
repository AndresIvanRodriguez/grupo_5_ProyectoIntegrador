const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

//RUTAS
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);
const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);




//Habilitar metodos PUT y DELETE
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


//Servidor
app.listen(process.env.PORT || 3000, () =>console.log("Servidor Corriendo en Puerto 3000"));

//Error 404
app.use((req, res, next) => {
    res.status(404).render("./users/not-found");
});
