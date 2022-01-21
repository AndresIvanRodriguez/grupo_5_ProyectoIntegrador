
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const localizarUbicacion = (category) => {
    return products.filter(
      (ubicacion) => ubicacion.category === category,
    
    )}
  
const Masvendidos=localizarUbicacion("mas vendido")
const carrito=localizarUbicacion("para-el-carrito")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
    home: (req,res)=>{
        res.render("users/home", {
            Masvendidos,

        });
    },
    productInfo: (req,res) => {
        res.render(("products/product_info"));
    },
    loginUser: (req,res)=> {
        res.render(("users/login"));
    },
    registerUser: (req,res) => {
        res.render(("users/register"));
    },
    
    carrito:(req,res)=>{
        res.render("users/carrito",{
			carrito,
			toThousand
		});
    },
    producto:(req,res)=>{
        res.render(("users/producto"));
    }
}
