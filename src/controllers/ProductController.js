const ProductService = require("../services/ProductService");

class ProductController {
  async create(req, res) {
    const { name, price, image } = req.body;

    const product = await ProductService.create(name, price, image);

    if (product instanceof Error) {
      return res.status(400).json(product.message);
    }

    return res.json(product);
  }

  async getAll(req, res) {
    const products = await ProductService.getAll();

    if (products instanceof Error) {
      return res.status(400).json(products.message);
    }

    return res.json(products);
  }
}


module.exports = new ProductController();