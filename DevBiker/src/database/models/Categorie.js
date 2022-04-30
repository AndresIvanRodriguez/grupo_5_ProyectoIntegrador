module.exports = (sequelize, DataTypes) => {
    const Categorie = sequelize.define(             //nombre del modelo en plural
        "Categorie", 
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombreCategoria: { 
                type: DataTypes.STRING(255) 
            }
        },
        {
            tableName: "categories",
            timestamps: false
        }
    );

    Categorie.associate = models => {
        
        Categorie.hasMany(models.Product, {
            as: "Product",
            foreignKey: "categoriaId"
        });
    }

    return Categorie;           //Debemos retornar el mismo objeto
}