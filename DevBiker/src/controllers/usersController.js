const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usuariosDB.JSON');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require("bcryptjs");

const User = require("../models/User");			//modelo User
const { validationResult } = require("express-validator");
const bcryptjs = require('bcryptjs');

const controller = {

	register: (req, res) => {
		return res.render("users/register");
	},

	processRegister: (req, res) => {	
		const resultValidation = validationResult(req);

		if(resultValidation.errors.length > 0){
			return res.render("users/register", {
				errors: resultValidation.mapped(),	
				oldData: req.body
			})
		} 

		let userInDB = User.findByField("email", req.body.email);

		if(userInDB){
			return res.render("users/register", {
				errors: {
					email: {
						msg: "Esta email ya esta registrado"
					}
				},	
				oldData: req.body
			})
		}

		let userToCreate = {
			...req.body,
			image: req.file.filename,
			password: bcrypt.hashSync(req.body.password, 10)
		}

		User.create(userToCreate)
	
		return res.render('users/login');

	},

	login: (req, res) => {
		res.render("users/login");
	},

	index:(req,res)=>{
		res.render("users/index",{
			users
		})
	},
	
	loginProcess: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);

		if(userToLogin){
			let passwordCorrecta = bcryptjs.compareSync(req.body.password, userToLogin.password)
			if(passwordCorrecta){
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				res.redirect("perfil")
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

	profile: (req, res) => {
		res.render("users/perfil", {
			user: req.session.userLogged
		});
	},
	
	edit:(req, res)=>{
        let id = req.params.id;     //conocer el id del product
        let usersToEdit = users.find(users => users.id == id);
        res.render("users/editar", {
            usersToEdit,
            users
        });
    },

    update: (req, res) => {
		let password = bcrypt.hashSync(req.body.password, 10);
        let id = req.params.id;
        let usersToEdit = users.find(users => users.id == id);
        usersToEdit = {
            id: usersToEdit.id,
            ...req.body,
            image: usersToEdit.image,
			password: password
        };
        let newUsers = users.map(users => {
            if(users.id == usersToEdit.id){
                users = {...usersToEdit}
            }
            return users;
        })
        fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, " "));
        res.redirect("/users");
    },

	destroy : (req, res) => {
        let id = req.params.id;
        let finalUsers = users.filter(users => users.id != id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, " "));
        res.redirect("/users");
	},

	logout: (req, res) => {
		req.session.destroy();
		return res.redirect("/");
	}
}

module.exports = controller;



    
