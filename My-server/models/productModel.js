const {model} = require(`mongoose`)
const mongoose = require(`mongoose`)
const { ObjectId} = mongoose.Schema.Types


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl : {
        type: String,
        required: true
    },
    // location : {
    //     type : ObjectId,
    //     ref : `Shop`
    // },
    manufacturer : {
        type: ObjectId,
        ref: `User`
    },
    price : {
        type: Number,
        required: true
    },
})

const Product = model(`Products`, productSchema)

module.exports = Product