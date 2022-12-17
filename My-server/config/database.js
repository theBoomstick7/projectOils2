const mongoose = require(`mongoose`)

function startDatabase(){
    return mongoose.connect('mongodb://localhost:27017/essentialOils', {
         useNewUrlParser: true,
         useUnifiedTopology: true,

    })
}

module.exports = startDatabase