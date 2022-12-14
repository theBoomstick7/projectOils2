const Product = require(`../models/productModel`)

async function getAll(){
    return Product.find({})
}
async function createProduct(product,id){
  try {
    product.manufacturer = id
    return Product.create({...product})
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
    getAll,
    createProduct
}