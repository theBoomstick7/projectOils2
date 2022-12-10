const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcrypt`)
const User = require(`../models/userModel`)


const SECRET_KEY = `ALABALAPORTOKALA`

const validateToken = (token) => {
    try {
        const data = jwt.verify(token,SECRET_KEY)
        return data
    } catch (error) {
        throw new Error(`Invalid access token`)
    }
}

function createAccessToken(user){
    const payload = { 
        _id: user._id,
        email: user.email,
        username: user.username
    }
    const accessToken = jwt.sign(payload,SECRET_KEY)

    return{
        email: user.email,
        username: user.username,
        accessToken,
        _id:user._id
    }
}
async function register(username,email, password){
    const existingEmail = await User.findOne({email})
    const existingUser = await User.findOne({username})

    if(existingEmail){
        throw new Error(`Email is already taken`)
    }
    else if(existingUser) {
        throw new Error(`User already exists`)
    }

    const user = await User.create({username,email,password})
    return createAccessToken(user)
} 
async function login(email,password){
    const user = await User.findOne({email})

    if(!user){
        throw new Error (`Invalid email or password`)
    }

    const existingUser = await bcrypt.compare(password, user.password)

    if(existingUser){
        return createAccessToken(user)
    } else 
    {
        throw new Error(`Invalid email or password`)
    }
}

module.exports = {
    login,
    register,
    createAccessToken,
    validateToken
}