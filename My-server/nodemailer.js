const nodemailer = require(`nodemailer`)

const transporter = nodemailer.createTransport({
    service: `gmail`,
    auth:{
        user : `essentialOilsNodeMailer`,
        pass: `Nodemailer`
    }
})

const mailOptions = {
    from: `essentialOilsNodeMailer`,
    to: `aleksandur.vartolomeev@gmail.com`,
    subject: `Sending email through node`,
    text: `Hello`
}
function sendEmail(mailOptions){
  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

module.exports = {
  sendEmail
}