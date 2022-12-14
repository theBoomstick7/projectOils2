const express = require(`express`)
const app = express()
const cors = require(`cors`)
const createdCors = require(`./config/cors`)
const startDatabase = require("./config/database")
const router = require("./routes")
const { authMiddleware } = require('./middleware/auth');

//app.use(cors({credentials: true, origin: 'http://localhost:4200', allowedHeaders: ['Content-Type, X-Authorization, X-RapidAPI-Key, X-RapidAPI-Host']}))
app.use(createdCors());
app.use(express.json())
app.use(authMiddleware)
app.use(router)


startDatabase()
.then(() =>{

    app.listen(3000, () => console.log(`Server is listening on port 3000`))
})
.catch((err) => console.log(err))