const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require("express-validator");

const controller = {

    register: (req,res) => {
        return res.render("users/register");
    },

    processRegister: async (req,res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        let {email} = req.body
        let userInDB = await db.User.findOne({
            where:{
                email:email,
            }
        })
        if(userInDB){
            return res.render("users/register", {
                errors: {
                    email: {
                        msg: "Este email ya está registrado"
                    }
                },	
                oldData: req.body
            })
        }
        try {
            const imagen = req.file ? req.file.filename : "default-image.png";
            const {nombre,apellido,email,direccion,fechaNacimiento,password} = req.body;
            await db.User.create({
                nombre,
                apellido,
                email,
                direccion,
                fechaNacimiento,
                password:bcryptjs.hashSync(req.body.password, 10),
                imagen:imagen,
                roleId:2 
            }
            );
           
        } catch (error) {
           res.send(error)
        }
      
        return res.redirect('users/login');
    }, 

    edit : (req,res) => {
        db.User.findByPk(req.params.id)
        .then((usersToEdit)=>{
            res.render("users/editar",{
                usersToEdit
            })
        })
    },

    users: async (req, res) => {
        let  users = await db.User.findAll();
        res.render("users/index", {
            users
        });
    },
   
    destroy : async (req, res) => {
        await db.User.destroy({
           where:{
               id: req.params.id
           }
       })
       
       return res.redirect('/users' )
	},

    loginProcess: async (req, res) => {
        
        let {email} = req.body
        
        let userToLogin = await db.User.findOne({
            where:{
                email:email,
            }
        })

        if(userToLogin){
            let passwordCorrecta = bcryptjs.compareSync(req.body.password, userToLogin.password)
            let rolAdmin = userToLogin.roleId == 1;

            const administrador = passwordCorrecta == rolAdmin;
            console.log(userToLogin)
            console.log(administrador)

			if(passwordCorrecta && !administrador){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.recordarme != undefined){	
                    console.log("Aqui va la cookie 1:",req.cookies);
                    res.cookie('recordarme', userToLogin.email,{maxAge: 600000});
                    }
                
                res.redirect("/")
            }

            if(administrador){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                res.redirect("/admin"/* , {
                    userAdmin: req.session.userLogged
                } */)
            }
                
            return res.render("users/login", {
                errors: {
                    email: {
                        msg: "Los datos ingresados son incorrectos"
                    }
                }
            });
		}

		return res.render("users/login", {
			errors: {
				email: {
					msg: "Correo electronico no registrado"
				}
			}
		});		
	},

    profile: async (req, res) => {
		return await res.render("users/perfil", {
			user: req.session.userLogged			//La vista va a conocer esta variable
		});
	},

    login: (req, res) => {
		return res.render("users/login");
	},

    update: async(req,res) => {
        let userLogged = await db.User.findByPk(req.params.id)
        if(userLogged){
        }
        const imagen = req.file ? req.file.filename : "default-Imagen.png";
         const {nombre,apellido,email,direccion,fechaNacimiento,password} = req.body;
        await db.User.update({
            nombre, apellido, email, direccion, fechaNacimiento, password:bcryptjs.hashSync(req.body.password, 10), imagen:imagen
        },
        {
            where: {
                id:req.params.id
        },
        })
        return res.render("users/perfil", {
            user: req.session.userLogged            //La vista va a conocer esta variable
        });
    },

    logout: (req, res) => {
		req.session.destroy();
		return res.redirect("/");
	}
}

module.exports = controller;