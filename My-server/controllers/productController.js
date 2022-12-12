const {getAll,createProduct} = require(`../services/productService`)

const productController = require(`express`).Router()

productController.post(`/create`, async(req,res) => {
    const {title, description,imageUrl} = req.body
    const {manufacturer} = req.user 
    
    const data = {
        title,
        manufacturer,
        description,
        imageUrl
    }

    try {
        const product = await createProduct(data)
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    res.end()
})
productController.get(`/products` , async (req,res) => {
    const products = await getAll()
    res.status(200).json(products)
})
module.exports = productController