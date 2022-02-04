const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const multer = require('multer');
const usersController = require("../controllers/usersController");
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage})
router.post('/', upload.single("image"),usersController.store);


module.exports=router;