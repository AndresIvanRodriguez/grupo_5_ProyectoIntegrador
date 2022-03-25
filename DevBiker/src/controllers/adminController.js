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
			})	
			res.redirect('/admin');
		} catch (error) {
			return res.send(error)
		}
	},
    
    edit: async (req, res)=>{
        let productoId = req.params.id;		//conocer el id del product
		let productToEdit = await db.Product.findByPk(productoId);

        res.render("admin/editar", {
            productToEdit
        });
    },

    update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		productToEdit = {
            id: productToEdit.id,
			...req.body,
            image: productToEdit.image
		};

		let newProducts = products.map(product => {
			if(product.id == productToEdit.id){
				product = {...productToEdit}
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect("/admin");
	},

    destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect("/admin");
	}
}

module.exports = controller;


