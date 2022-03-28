const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');
const multer = require('multer');
const User = require("../models/User");	
const { update } = require('./usersController');
const { brotliDecompress } = require('zlib');
const { validationResult } = require("express-validator");
const controller = {
    register:(req,res)=>{
        return res.render("users/register");
    },
     processRegister: async (req,res)=>{
        /* const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } */
        try {
            const {nombre,apellido,email,direccion,fechaNacimiento,password,imagen}=req.body;
            await db.Users.create({
                nombre,
                apellido,
                email,
                direccion,
                fechaNacimiento,
                password:bcryptjs.hashSync(req.body.password, 10),
                imagen
            }
            );
           
        } catch (error) {
           
        }
      
        return res.redirect('users/login');
    }, 
    edit : (req,res)=>{
        db.Users.findByPk(req.params.id)
        .then((usersToEdit)=>{
            res.render("users/editar",{usersToEdit})
        })


    },
    users: async (req, res)=>{
        let  users = await db.Users.findAll();
        res.render("users/index", {
            users
        });
    },
    update:async (req,res)=>{
        
        await db.Users.update({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            direccion:req.body.direccion,
            fechaNacimiento:req.body.fechaNacimiento,
            password:req.body.password,
            imagen:req.body.imagen
        },{ where:{
            id:req.params.id
        },
    
        })
       
        let  users = await db.Users.findAll();
        res.render("users", {
            users
        });
    },
   
    destroy : (req, res) => {
       db.Users.destroy({
           where:{
               id: req.params.id
           }
       })
       
       return res.redirect('/users' )
	},
    loginProcess: async (req, res) => {
        
            let {email}=req.body
        
    let userToLogin = await db.Users.findOne({
         where:{
             email:email,
           
             
         }
         
     })
         if(userToLogin){
            let passwordCorrecta = bcryptjs.compareSync(req.body.password, userToLogin.password)
            console.log(passwordCorrecta);
			if(passwordCorrecta){
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            if(req.body.recordarme != undefined){	
                console.log("Aqui va la cookie 1:",req.cookies);
                res.cookie('recordarme', userToLogin.email,{maxAge: 600000});
                }
            
            res.redirect("/")}
            
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
    profile: (req, res) => {
		res.render("users/perfil", {
			user: req.session.userLogged			//La vista va a conocer esta variable
		});
	},
    login: (req, res) => {
		res.render("users/login");
	},
    profile: (req, res) => {
		res.render("users/perfil", {
			user: req.session.userLogged			//La vista va a conocer esta variable
		});
	},
    logout: (req, res) => {
		req.session.destroy();
		return res.redirect("/");
	}
    /* edit : async (req, res)=>{
        try{
            const userid=req.params.id;
            const User=await db.User.findByPk(userid);
            return res.render("editar.ejs");

        }
         catch(error){
            return res.send(error)
        }
    } */

    /* profile: (req, res) => {
		res.render("users/perfil", {
			user: req.session.userLogged			//La vista va a conocer esta variable
		});
	},
    
   
    login: (req, res) => {
		res.render("users/login");
	}, */
     /*  processRegister:(req,res)=>{
        console.log(req.body);
        db.Users.create({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            direccion:req.body.direccion,
            fechaNacimiento:req.body.fechaNacimiento,
            password:req.body.password,
            imagen:req.body.imagen
        });
        return res.redirect('users/login');
    }*/
}
module.exports=controller;