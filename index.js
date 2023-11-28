const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

require("dotenv").config()

const PORT = 6002

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(PORT, () => {console.log(`app running on port: ${PORT}`)})