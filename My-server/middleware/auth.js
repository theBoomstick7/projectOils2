const { validateToken } = require("../services/userService");
const { getProductsByManufacturer } = require("../services/productService")


const authMiddleware = async (req, res, next) => {
    const accessToken = req.header(`X-Authorization`);
    if(accessToken){
        try {
            const user = validateToken(accessToken);
            const products = await getProductsByManufacturer(user._id)
            req.user = {
                'email': user.email,
                'username': user.username,
                '_id': user._id,
                accessToken,
                products
            }
            
        } catch (error) {
            res.json(error)
        }
    }
    next();
}

module.exports = {
    authMiddleware,
}