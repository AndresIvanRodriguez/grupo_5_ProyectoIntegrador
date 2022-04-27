const fs = require('fs');
const path = require('path');

// Base de datos
const db = require("../database/models/index.js");

const controller = {
	admin: (req, res) => {
		res.render("admin/admin")
	},

	index: async (req, res) => {
		const products = await db.Product.findAll()
		res.render("admin/index", {
			products
		})
    },

	createForm: (req, res) => {
		res.render("admin/create");
	},

    create: async (req, res) => {
		let imagen = req.file ? req.file.filename : "default-image.png";
		try {
			const { nombre, precio, color, genre, descuento, descripcion, material, numDeCambios,
					tipoFreno, suspension, stock, categoriaId } = req.body;
			await db.Product.create({
				nombre: req.body.nombre,
				precio: req.body.precio,
				color: req.body.color,
				genre: req.body.genre,
				descuento: req.body.descuento,
				descripcion: req.body.descripcion,
				material: req.body.material,
				numDeCambios: req.body.numDeCambios,
				tipoFreno: req.body.tipoFreno,
				suspension: req.body.suspension,
				stock: req.body.stock,
				imagen: imagen
			})	
			res.redirect('/admin');
		} catch (error) {
			return res.send(error)
		}
	},
    
    edit: async (req, res) => {
        let productoId = req.params.id;		//conocer el id del product
		let productToEdit = await db.Product.findByPk(productoId);

        res.render("admin/editar", {
            productToEdit
        });
    },

    update: async (req,res) => {
		try {
		const { nombre, precio, color, genre, descuento, descripcion, material, numDeCambios,
			tipoFreno, suspension, stock, imagen, categoriaId } = await req.body;

        db.Product.update({
			nombre,precio,color,genre,descuento,descripcion,material,numDeCambios,tipoFreno,suspension,
			stock,imagen
        },
		{ 
			where:{
            	id:req.params.id
        },
    
        })
        
        return res.redirect("/admin");
	} catch (error) {
		return res.send(error)
	}
    },

    destroy : async (req, res) => {
		await db.Product.destroy({
			where:{
				id: req.params.id
			}
		})
		
		return res.redirect('/admin');
	}
}

module.exports = controller;