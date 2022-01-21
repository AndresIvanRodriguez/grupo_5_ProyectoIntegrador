const res = require("express/lib/response");
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
    store: (req, res) => {
		console.log(req.body);
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: 'default-img.png'
		};

		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect('/products');
	},
    vista: (req,res)=>{
        res.render(("admin/createProducts"));
    },
    index:(req,res)=>{
        res.render("admin/index",{
			products,
			toThousand
		})
    },
    edit:(req,res)=>{
        res.render(("admin/edit"))
    },
    create: (req,res)=>{
        res.send("recibimos")
    }
}