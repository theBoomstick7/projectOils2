const nodemailer = require(`nodemailer`)

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port:587,
//     service: `gmail`,
//     auth:{
//         user : `essentialOilsNodeMailer`,
//         pass: `Nodemailer`
//     }
// })

// const mailOptions = {
//     from: `essentialOilsNodeMailer`,
//     to: `aleksandur.vartolomeev@gmail.com`,
//     subject: `Sending email through node`,
//     text: `Hello`
// }
async function sendEmail(user,callback){
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:587,
    service: `gmail`,
    auth:{
        user : `essentialoilsnodemailer`,
        pass: `nrpvrhihhowxerst`
    }
})
const mailOptions = {
  from: user.email,
  to: `essentialoilsnodemailer@gmail.com`,
  subject: user.subject,
  text: user.query
}
console.log(mailOptions)
 let info = await transporter.sendMail(mailOptions)
callback(info)
}

module.exports = {
  sendEmail
}