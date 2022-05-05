const db = require ('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
module.exports = {
    'lista': async (req,res) => {
        const datos = await db.Categorie.findAll()
        const respuesta = {
            meta: {
                total: datos.length,
                status: 200,
                url: "/api/users"
            },
            data: datos
        }
        res.json(respuesta);
   },
    'detail': async (req,res) => {
        const categoria = await db.Categorie.findByPk(req.params.id);
        res.json(categoria);
    }
}