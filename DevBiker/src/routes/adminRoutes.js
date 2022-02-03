const express = require("express");
const router = express.Router();
const multer = require('multer');

const adminController = require("../controllers/adminController");

let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage})

//Home admin
router.get("/", adminController.index);

//Rutas Agregar producto
router.get('/create', adminController.vista);
router.post('/', upload.single("image"),adminController.store);

//Rutas editar
router.get("/editar/:id", adminController.edit);
router.patch("/editar/:id", adminController.update);

//Ruta eliminar producto
router.delete('/delete/:id', adminController.destroy); 

module.exports = router;

  