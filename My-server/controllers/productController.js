const {getAll,createProduct, deleteProduct} = require(`../services/productService`)

const productController = require(`express`).Router()

productController.post(`/create`, async(req,res) => {
    const data = req.body


    try {
        const userId = req?.user?._id
        const product = await createProduct(data,userId)

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

productController.get(`/profile/:id`, async(req,res) => {
    try {
        const id = req.params.id.toString().slice(1)
        const response =  await deleteProduct(id)
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = productController