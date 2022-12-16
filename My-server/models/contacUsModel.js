const mongoose = require(`mongoose`)
const {model} = require(`mongoose`)
const {Schema} = require(`mongoose`)

const contactSchema = new Schema({
    email: {
        type: String
    },
    subject: {
        type: String
    },
    query: {
        type:String
    },
    name: {
        type: String
    }
    
})

const Query = model(`Query`, contactSchema)

module.exports = Query