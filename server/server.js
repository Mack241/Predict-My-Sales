import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'
import fileRoute from './routes/fileRoute.js'
import mysql from 'mysql'

import fileUpload from 'express-fileupload'

dotenv.config()

const app = express()

let con = mysql.createConnection({
    host: process.env.localhost,
    user: process.env.user,
    password: process.env.password
})

con.connect(e => {
    if(e) throw e
    console.log("Database connected")
})

app.use(cors())
app.use(express.json())
app.use(fileUpload())


app.use('/file', fileRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))
