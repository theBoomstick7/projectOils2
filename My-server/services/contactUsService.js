const Query = require(`../models/contacUsModel`)
const nodemailer = require(`nodemailer`)

async function sendEmail(data,callback){
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
    sender: data.email,
    to: `essentialoilsnodemailer@gmail.com`,
    subject: data.subject,
    query: data.query,
    html: `
    <h2>From:</h2>
    <div>${data.email}</div>
    <h2>Subject:</h2>
    <div>${ data.subject}</div>
    <h2>Query:</h2>
    <div>${ data.query}</div>
    `
  }
  
  let info = await transporter.sendMail(mailOptions)
  
  callback(info)
  }


async function saveQuery(data){
    return await Query.create({...data})
}

module.exports = {
    saveQuery,
    sendEmail
}