const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {

    'lista': async (req, res) => {
        const datos = await db.User.findAll({
            attributes: ['id', 'nombre', 'apellido', 'email', 'imagen']
        })

        const respuesta = {
            meta: {
                status: 200,
                total: datos.length,
                url: "/api/user"
            },
            data: {
                datosU: datos,
            }
        }
        res.json(respuesta);
    },

    'detalil': async (req, res) => {
        const producto = await db.User.findByPk(req.params.id,
            {
                attributes: ['id', 'nombre', 'apellido', 'email', 'imagen']
            });
        res.json(producto);
    }
}
