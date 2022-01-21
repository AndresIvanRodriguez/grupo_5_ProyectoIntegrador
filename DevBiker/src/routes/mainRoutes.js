const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("", mainController.home);
router.get('/product-info',mainController.productInfo);
router.get('/login',mainController.loginUser);
router.get('/register',mainController.registerUser);
<<<<<<< HEAD
=======

>>>>>>> b81fa4ad063927d18a6d7151bc0f3010f6c5bbcd
router.get("/carrito",mainController.carrito);
router.get("/producto",mainController.producto);
module.exports = router;