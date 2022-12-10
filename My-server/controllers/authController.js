const { register, login} = require(`../services/userService`)

const authController = require(`express`).Router()


authController.post(`/register`, async(req,res) => {
    const {username,email,password} = req.body

    try {
        const user = await register(username, email, password)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    res.end()
})

authController.post(`/login`, async ( req,res) => {
    const {email,password} = req.body
    try {
        const user = await login(email,password)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    res.end()
})

module.exports = authController