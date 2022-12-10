const express = require(`express`)
const app = express()
const cors = require(`cors`)
const startDatabase = require("./config/database")
const router = require("./routes")


app.use(express.json())
app.use(router)
app.use(cors)



startDatabase()
.then(() =>{
    app.listen(3000, () => console.log(`Server is listening on port 3000`))
})
.catch((err) => console.log(err))