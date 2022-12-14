const { validateToken } = require("../services/userService");

const authMiddleware = (req, res, next) => {
    const accessToken = req.header(`X-Authorization`);
    if(accessToken){
        try {
            const user = validateToken(accessToken);
            req.user = {
                'email': user.email,
                'username': user.username,
                '_id': user._id,
                accessToken
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