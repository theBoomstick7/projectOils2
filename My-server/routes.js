const router = require(`express`).Router()
const authController = require(`./controllers/authController`)
const emailController = require("./controllers/emailController")
const productController = require("./controllers/productController")

router.use(authController)
router.use(productController)
router.use(emailController)

module.exports = router