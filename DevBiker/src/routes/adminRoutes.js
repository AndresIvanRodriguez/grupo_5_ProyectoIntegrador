const express = require("express");
const router = express.Router();
const multer = require('multer');

//Requeriendo el controlador
const adminController = require("../controllers/adminController");

//Donde se va almacenar las imagenes
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),   //Donde se va a guardar
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname) //Le pasamos un nombre
});
let upload = multer ({storage})

//Home admin
router.get("/", adminController.index);

//Rutas Agregar producto
router.get('/create', adminController.vista);

//Procesar registro
//.single porque es un solo archivo y el nombre del for en el formulario
router.post('/', upload.single("image"),adminController.store); 

//Rutas editar
router.get("/editar/:id", adminController.edit);
router.patch("/editar/:id", adminController.update);

//Ruta eliminar producto
router.delete('/delete/:id', adminController.destroy); 

module.exports = router;

  