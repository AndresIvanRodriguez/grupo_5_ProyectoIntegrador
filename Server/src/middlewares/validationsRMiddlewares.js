const { body } = require("express-validator");  //Validar lo que viene por body

//Validaciones para el registro
const validations = [
    body("nombre").notEmpty().withMessage("Tienes que agregar un nombre"),
    body("apellido").notEmpty().withMessage("Tienes que agregar tus apellidos"),
    body("direccion").notEmpty().withMessage("Tienes que agregar tu dirección"),
    body("email").isEmail().withMessage("El correo es invalido o ya esta registrado"),
    body("password").isLength( {min: 8} ).withMessage("La contraseña debe tener minimo 8 caracteres"),
 //body("adress").notEmpty().withMessage("Debes agregar tu direccion de residencia"),
    body("fechaNacimiento").isBefore('2004-12-31').withMessage("Debe tener la mayoria de edad"),
    body("imagen").custom(( value, { req }) => {
        let file = req.file;
        if(!file){
            throw new Error("Tienes que subir una imagen");
        }
        return true;
    })
];

module.exports = validations;