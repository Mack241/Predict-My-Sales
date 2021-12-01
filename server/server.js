import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'
import fileRoute from './routes/fileRoute.js'
import userRoute from './routes/userRoute.js'
import dataRoute from './routes/dataRoute.js'
import chartRoute from './routes/chartRoute.js'

import fileUpload from 'express-fileupload'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())


app.get('/', (req, res) => {
    res.send("working")
})

app.use('/file', fileRoute)
app.use('/user', userRoute)
app.use('/fetch', dataRoute)
app.use('/charts/fetch', chartRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))
