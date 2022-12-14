const {model} = require(`mongoose`)
const mongoose = require(`mongoose`)
const { ObjectId} = mongoose.Schema.Types

const shopSchema = new mongoose.Schema({
    location : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    products : {
        type: [ObjectId],
        ref: `Product`
    }
})

const Shop = model(`Shops`, shopSchema)
module.exports = Shop