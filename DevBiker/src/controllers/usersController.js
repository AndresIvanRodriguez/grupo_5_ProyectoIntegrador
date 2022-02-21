const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usuariosDB.JSON');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require("bcryptjs");

const { validationResult } = require("express-validator");

const controller = {

	register: (req, res) => {
		return res.render("users/register");
	},

	processRegister: (req, res) => {	
		let image = req.file ? req.file.filename : "default-image.png";
		let password = bcrypt.hashSync(req.body.password, 10);

		let email = req.body.email;
		let usuario = users.find(el => el.email === email);

		//funcion de express validator para validar el formulario
		const resultValidation = validationResult(req);	

		if(resultValidation.errors.length > 0 || usuario){
			res.render("users/register", {
				errors: resultValidation.mapped(),	
			})
		} else {
			let userToCreate = {
				id: users[users.length - 1].id + 1,
				...req.body,
				password: password,
				image: image
			};

			users.push(userToCreate);
			fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
	
			res.render('users/login');
		}
	},

	login: (req, res) => {
		res.render("users/login");
	},

	profile: (req, res) => {
		//let id = req.params.id;
		//let usuario = users.find(p => p.id == id);
		res.render("users/perfil");
	},

	index:(req,res)=>{
        res.render("users/index",{
            users
        })
    },

	loginProcess: (req, res) => {
		let email = req.body.email;
		let usuarioEmail = users.find(el => el.email === email);

		let passwordBody = req.body.password;
		
		let passwordUsuario = bcrypt.compareSync(passwordBody, usuarioEmail.password);
		console.log(passwordUsuario)

		let usuarioCorrecto = usuarioEmail && passwordUsuario;
		
		if(usuarioCorrecto){
			/* delete usuarioCorrecto.password; */			//Borrar la contraseña en la sessio por seguridad
			return res.render("users/perfil");
		} else {
			return res.render("users/login");
		}
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
	}
}

module.exports = controller;



    
