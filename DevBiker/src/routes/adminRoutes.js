const express = require("express");
const router = express.Router();
const multer = require('multer');
const adminController = require("../controllers/adminController");
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage})
router.get("/", adminController.index);
router.get('/create', adminController.vista);
router.post('/', upload.single("image"),adminController.store);
//router.get("/editar/:idProducto", adminController.edit);

module.exports = router;

  