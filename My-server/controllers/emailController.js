const {sendEmail} = require(`../nodemailer`)

const emailController = require(`express`).Router()

emailController.post(`/contact-us`, (req,res) => {
    console.log(`request came`)
    let user = req.body
    console.log(user)

    try {
        sendEmail(user,callback => {
            console.log(`Email sent`)
           // res.send(callback)
        })
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    res.end()
})

module.exports = emailController