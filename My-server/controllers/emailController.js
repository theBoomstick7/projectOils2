const {sendEmail, transporter} = require(`../nodemailer`)

const emailController = require(`express`).Router()

emailController.post(`/contact-us`, (req,res) => {
    const mailOptions = {
        from: transporter,
        to: req.body.email,
        subject : req.body.subject,
        text : req.body.query
    }
    try {
        const email = sendEmail(mailOptions)
        res.status(200).json(email)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    res.end()
})

module.exports = emailController