const {sendEmail} = require(`../nodemailer`)
const { saveQuery } = require("../services/contactUsService")

const emailController = require(`express`).Router()

emailController.post(`/contact-us`, (req,res) => {
    console.log(`request came`)
    let data = req.body
   
    try {
        sendEmail(data,callback => {
            console.log(`Email sent`)
           // res.send(callback)
        })
        saveQuery(data)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    res.end()
})

module.exports = emailController