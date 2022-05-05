// Base de datos
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    //Mostrar página de inicio
    home: async (req, res)=>{
        const oferta = await db.Product.findAll({
            where: {
                descuento: {
                    [Op.gte]: 15
                }
            }
        })
        res.render("users/home", {
            oferta
        });
    },

    //Mostrar página de registro
    registerUser: (req,res) => {
        res.render("users/register");
    },

    //Mostrar página de carrito de compras
    carrito:(req,res)=>{
        res.render("users/carrito");
    },

    //Mostrar página de todos los productos
    products: async (req, res)=>{
        const products = await db.Product.findAll();
        res.render("products/products", {
            products
        });
    },

    /* //Mostrar página para el detalle del producto*/
    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            res.render('products/detail', {
                product
            });
        });
    },

    //Páginas por categoria
    montana: (req, res) => {
        db.Product.findAll({
            where: {
                categoriaId: 1
            }
        })
        .then(montana => {
            res.render("products/cMontana", {
                    montana
            })
        })
    },

    ruta: (req, res) => {
        db.Product.findAll({
            where: {
                categoriaId: 2
            }
        })
        .then(ruta => {
            res.render("products/cRuta", {
                    ruta
            })
        })
    },

    urbano: (req, res) => {
        db.Product.findAll({
            where: {
                categoriaId: 3
            }
        })
        .then(urbano => {
            res.render("products/cUrbana", {
                    urbano
            })
        })
    },

    bmx: (req, res) => {
        db.Product.findAll({
            where: {
                categoriaId: 4
            }
        })
        .then(bmx => {
            res.render("products/cBMX", {
                    bmx
            })
        })
    },
    oferta: async (req, res) => {
        const oferta = await db.Product.findAll({
            where: {
                descuento: {
                    [Op.gte]: 15
                }
            }
        })        
        return res.render("products/oferta", {
                oferta
        })
    }
}



