/**
 * Metodo creacion modelo Generos
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/dist').DataTypes} DataTypes 
 */
//Lo anterior es para generar un autocompletado

module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define(             //nombre del modelo en plural
        "Rol", 
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            rol: { type:DataTypes.STRING(255)},
        },
        {
            tableName: "roles",
            timestamps: false
        }
    );

    Rol.associate = models => {
        
        Rol.hasMany(models.User, {
            as: "User",
            foreignKey: "roleId"
        });
    }
    
    return Rol;           //Debemos retornar el mismo objeto
}