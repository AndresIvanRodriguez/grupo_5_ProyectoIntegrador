module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(             //nombre del modelo en plural
        "Product", 
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: { type:DataTypes.STRING(255)},
            precio: { type:DataTypes.INTEGER},
            color: { type:DataTypes.STRING(255)},
            genre: { type:DataTypes.STRING(255)},
            descuento: { type:DataTypes.INTEGER},
            descripcion: { type:DataTypes.STRING(255)},
            material: { type:DataTypes.STRING(255)},
            numDeCambios: { type:DataTypes.INTEGER},
            tipoFreno: { type:DataTypes.STRING(255)},
            suspension: { type:DataTypes.STRING(255)},
            imagen: { type:DataTypes.STRING(255)},
        },
        {
            tableName: "products",
            timestamps: false
        }
    );

    Product.associate = models => {
        
        Product.belongsTo(models.Categorie, {
            as: "Categories",
            foreignKey: "categoriaId"
        });
    }

    return Product;           //Debemos retornar el mismo objeto
}