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

async function getLast3(){
  return Product.find({}).sort({_id: -1}).limit(3)
}
async function getProductsByManufacturer(_id){
  return Product.find({manufacturer: _id})
}

module.exports = {
    getAll,
    createProduct,
    getProductsByManufacturer
}