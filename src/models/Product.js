const { Model, DataTypes } = require('sequelize');

class Product extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.FLOAT,
            image: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Product;