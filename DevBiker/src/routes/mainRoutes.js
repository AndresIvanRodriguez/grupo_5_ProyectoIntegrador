const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("", mainController.home);
router.get('/product-info', mainController.productInfo);
router.get('/login', mainController.loginUser);
router.get('/register', mainController.registerUser);
router.get("/carrito", mainController.carrito);
router.get("/producto", mainController.producto);
router.get("/products", mainController.allProducts);

//Rutas de las categorias de los productos
router.get('/products/cMontana', mainController.montana);
router.get("/products/cRuta", mainController.ruta);
router.get("/products/cBmx", mainController.bmx);
router.get("/products/cUrbana", mainController.urbana);

module.exports = router;