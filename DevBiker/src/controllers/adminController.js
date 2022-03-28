const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.JSON');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Base de datos
const db = require("../database/models/index.js");

const controller = {
	index: async (req, res)=>{
		const products = await db.Product.findAll()
		res.render("admin/index", {
			products
		})
    },

	createForm: (req,res)=>{
		res.render(("admin/create"));
	},

    create: async (req, res) => {
		try {
			const { nombre, precio, color, genre, descuento, descripcion, material, numDeCambios,
					tipoFreno, suspension, stock, categoriaId} = req.body;
			await db.Product.create({
				 nombre,precio,color,genre,descuento,descripcion,material,numDeCambios,tipoFreno,suspension,
stock,
			})	
			res.redirect('/admin');
		} catch (error) {
			return res.send(error)
		}
	},
    
    edit : (req,res)=>{
        db.Product.findByPk(req.params.id)
        .then((productToEdit)=>{
            res.render("admin/editar",{productToEdit})
        })


    },

    update:async (req,res)=>{
		try {
        const { nombre, precio, color, genre, descuento, descripcion, material, numDeCambios,
			tipoFreno, suspension, stock, categoriaId} = req.body;
        db.Product.update({
			nombre,precio,color,genre,descuento,descripcion,material,numDeCambios,tipoFreno,suspension,
			stock,
        },{ where:{
            id:req.params.id
        },
    
        })
        
        res.redirect("/admin");
	} catch (error) {
		return res.send(error)
	}
    },

    destroy : (req, res) => {
		db.Product.destroy({
			where:{
				id: req.params.id
			}
		})
		
		return res.redirect('/admin' )
	 },
}

module.exports = controller;


