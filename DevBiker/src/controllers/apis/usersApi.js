const db = require ('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");



module.exports={

    'lista': async (req,res)=>{
        const datos = await db.User.findAll()
        const respuesta={
            meta:{
                status:200,
                total:datos.longth,
                url:"/api/product"
            },
            data:datos
        }
        res.json(respuesta);
   },

    'detalil': async (req,res)=>{
        const producto= await db.User.findByPk(req.params.id);
        res.json(producto);
    }
}
