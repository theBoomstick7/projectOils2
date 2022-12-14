const Product = require(`../models/productModel`)
const Shop = require("../models/shop")

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

module.exports = {
    getAll,
    createProduct
}