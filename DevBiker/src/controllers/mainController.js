const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const localizarUbicacion = (tipo) => {
    return products.filter(
      (ubicacion) => ubicacion.tipo === tipo
    );
};

const mostrarCategoria = (category) => {
    return products.filter(
      (categoria) => categoria.category === category
    );
};
  
const masVendidos = localizarUbicacion("mas vendido");
const carrito = localizarUbicacion("para-el-carrito");

const montana = mostrarCategoria("montaña");
const urbana = mostrarCategoria("urbana");
const ruta = mostrarCategoria("ruta");
const bmx = mostrarCategoria("bmx");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const allbikes = localizarUbicacion("");

module.exports = {
    //Mostrar página de inicio
    home: (req,res)=>{
        res.render("users/home", {
            masVendidos,
        });
    },
    //Mostrar página de login
    loginUser: (req,res)=> {
        res.render("users/login");
    },
    //Mostrar página de registro
    registerUser: (req,res) => {
        res.render(("users/register"));
    },
    //Mostrar página de carrito de compras
    carrito:(req,res)=>{
        res.render("users/carrito",{
			carrito,
			toThousand
		});
    },
    //Mostrar página de descripción del producto
    producto:(req,res)=>{
        res.render(("users/producto"));
    },
    productInfo: (req,res) => {
        res.render(("products/product_info"));
    },
    //Mostrar página de todos los productos
    allProducts: (req, res)=>{
        res.render("products/allProducts", {
            products
        });
    },
    //Páginas por categoria
    montana: (req,res)=>{
        res.render("products/cMontana", {
            montana
        });
    },
    ruta: (req,res)=>{
        res.render("products/cRuta",{
            ruta
        });
    },
    bmx: (req,res)=>{
        res.render("products/cBmx", {
            bmx
        });
    },
    urbana: (req,res)=>{
        res.render("products/cUrbana", {
            urbana
        });
    }
}



