const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static("public"));

<<<<<<< HEAD
=======
const homeRouter = require("./routes/mainRoutes");
const admin= require("./routes/adminRoutes");
>>>>>>> b81fa4ad063927d18a6d7151bc0f3010f6c5bbcd
app.set("view engine", "ejs");
app.set("views", "./src/views");

//RUTAS
<<<<<<< HEAD
const mainRoutes = require("./routes/mainRoutes");
const adminRoutes = require("./routes/adminRoutes");
app.use("/", mainRoutes);
app.use("/admin", adminRoutes);

//Habilitar metodos PUT y DELETE
const mothodOverride = require("method-override");
app.use(methodOverride("_method"));

=======
app.use("/",homeRouter);
app.use("/admin",admin);
>>>>>>> b81fa4ad063927d18a6d7151bc0f3010f6c5bbcd
//Servidor
app.listen(process.env.PORT || 3000, () =>console.log("Servidor Corriendo en Puerto 3000"));

//Error 404
app.use((req, res, next) => {
    res.status(404).render("./users/not-found");
});
