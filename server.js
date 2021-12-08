import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'
import fileRoute from './server/routes/fileRoute.js'
import userRoute from './server/routes/userRoute.js'
import dataRoute from './server/routes/dataRoute.js'
import chartRoute from './server/routes/chartRoute.js'
import path from 'path'

import fileUpload from 'express-fileupload'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())


app.get('/', (req, res) => {
    res.send("working")
    console.log(process.env.NODE_ENV)
})

app.use('/file', fileRoute)
app.use('/user', userRoute)
app.use('/fetch', dataRoute)
app.use('/charts/fetch', chartRoute)

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static("client/build"))

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//     })
// }
 
const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))
