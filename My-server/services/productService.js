const Product = require(`../models/productModel`)

async function getAll(){
    return Product.find({})
}
async function createProduct(data){
  return Product.create(data)
}

module.exports = {
    getAll,
    createProduct
}