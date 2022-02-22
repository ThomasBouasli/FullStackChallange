const Product = require('../models/Product');

class ProductService{
    async create(name, price, image){
        
        if(!name || !price || !image){
            return {error: 'Missing parameters'};
        }

        const product = await Product.create({
            name,
            price,
            image
        });

        return product;
    }

    async getAll(){
        const products = await Product.findAll().catch(err => {
            return {error: "Error getting products"};
        });

        return products;
    }

}

module.exports = new ProductService();