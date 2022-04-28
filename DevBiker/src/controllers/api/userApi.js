const db = require ('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {

    'lista': async (req,res) => {
        const datos = await db.User.findAll()
        const respuesta = {
            meta: { 
                total: datos.length,
                status: 200,
                url: "/api/users"
            },
            data: {
                nombre: datos.nombre
            } 
        }
        res.json(respuesta);
   },

    'detail': async (req,res) => {
        const usuario = await db.User.findByPk(req.params.id);
        res.json(usuario);
    }
}
