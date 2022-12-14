const {getAll,createProduct} = require(`../services/productService`)

const productController = require(`express`).Router()

productController.post(`/create`, async(req,res) => {
    const data = req.body
    console.log(req.user)
    console.log(req.body)

    try {
        const userId = req?.user?._id
        const product = await createProduct(data,userId)
    console.log(product)

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