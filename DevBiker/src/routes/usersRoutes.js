const express = require("express");
const router = express.Router();
const multer = require('multer');
const { body } = require("express-validator");  //Validar lo que viene por body
const usersController = require("../controllers/usersController");

/* const guestMiddleware = require("../middlewares/guestMiddleware");
const multerMiddleware = require("../middlewares/gmulterMiddleware"); */

const validations = [
    body("nombre").notEmpty().withMessage("Tienes que agregar un nombre"),
    body("apellidos").notEmpty().withMessage("Tienes que agregar tus apellidos"),
    body("adress").notEmpty().withMessage("Tienes que agregar tu dirección"),
    body("email").isEmail().withMessage("El correo es invalido o ya esta registrado"),
    body("password").isLength( {min: 4} ).withMessage("La contraseña debe tener minimo 4 caracteres")
];

//Donde se va almacenar las imagenes
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img/usersImagen"),   //Donde guarda imagenes
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname) //Le pasamos un nombre
});
let upload = multer ({storage})

const validationUser = [                    //Middleware validar datos del login
	body("email").isEmail().withMessage("El usuario no es valido").bail(),
	body("password").isLength( {min: 4} ).withMessage("La contraseña no es correcta").bail()
]

//Formulario de registro
router.get('/register', /* guestMiddleware, */ usersController.register);

//Procesar el registro
router.post('/', upload.single("image"), validations, usersController.processRegister); 

//Formulario del login
router.get('/login', usersController.login);

//Formulario del login
router.post('/login', usersController.loginProcess);

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
