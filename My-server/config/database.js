const mongoose = require(`mongoose`)

function startDatabase(){
    return mongoose.connect('mongodb://localhost:27017/essentialOils')
}

module.exports = startDatabase