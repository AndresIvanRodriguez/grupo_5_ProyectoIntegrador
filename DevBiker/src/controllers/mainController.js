
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
    loginUser: (req,res)=> {
        res.render(("users/login"));
    },
    registerUser: (req,res) => {
        res.render(("users/register"));
    },
<<<<<<< HEAD
=======
    
>>>>>>> b81fa4ad063927d18a6d7151bc0f3010f6c5bbcd
    carrito:(req,res)=>{
        res.render("users/carrito",{
			carrito,
			toThousand
		});
    },
    producto:(req,res)=>{
        res.render(("users/producto"));
    },
    productInfo: (req,res) => {
        res.render(("products/product_info"));
    }
<<<<<<< HEAD

}
=======
}
>>>>>>> b81fa4ad063927d18a6d7151bc0f3010f6c5bbcd
