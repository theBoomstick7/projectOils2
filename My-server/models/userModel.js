const mongoose = require(`mongoose`)
const {Schema, } = require(`mongoose`)
const bcrypt = require(`bcrypt`)
const saltRounds = 5

const userSchema = new Schema({
    username: {
        required: true,
        type: String,
        minlength: [4, 'Username should have at least 4 characters!'],
        maxlength: [10, 'Username cannot have more than 10 characters!'],
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
        minlength: [6, 'Password should have at least 6 characters!'],
        maxlength: [12, 'Password cannot have more than 12 characters!'],
    },
    products: [{
        type:  mongoose.Types.ObjectId,
        ref: 'Products'
    }],
})
   

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                }
                this.password = hash;
                next();
            })
        })
        return;
    }
    next();
    });


const User = new mongoose.model(`User`, userSchema)
module.exports = User