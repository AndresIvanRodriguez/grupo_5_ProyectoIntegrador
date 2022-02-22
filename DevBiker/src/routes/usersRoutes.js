const express = require("express");
const router = express.Router();
const multer = require('multer');
const { body } = require("express-validator");  //Validar lo que viene por body
const usersController = require("../controllers/usersController");

const validationsRegister = require("../middlewares/validationsRMiddlewares");

/* const guestMiddleware = require("../middlewares/guestMiddleware");*/

//Donde se va almacenar las imagenes
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img/usersImagen"),   //Donde guarda imagenes
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname) //Le pasamos un nombre
});
let upload = multer ({storage})

//Validaciones para el login
const validationUser = [                    
	body("email").isEmail().withMessage("El usuario no es valido"),
	body("password").isEmpty().withMessage("La contraseña no es correcta")
]

//Formulario de registro
router.get('/register', /* guestMiddleware, */ usersController.register);

//Procesar el registro
router.post('/', upload.single("image"), validationsRegister, usersController.processRegister); 

//Formulario del login
router.get('/login', usersController.login);

//Formulario del login
router.post('/login', validationUser, usersController.loginProcess);

//Procesar login
router.get("/perfil", usersController.profile);

//ruta index
router.get("/", usersController.index);

//Rutas editar
router.get("/editar/:id", usersController.edit);
router.patch("/editar/:id", usersController.update);

//Ruta eliminar producto
router.delete('/delete/:id', usersController.destroy);

module.exports = router;
