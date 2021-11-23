import { config } from 'dotenv'
import mysql from 'mysql'

const connectDB = async () => {
    try {

        let con = mysql.createConnection({
            host: process.env.localhost,
            user: process.env.user,
            password: process.env.password
        })

    } catch(err) {

    }
}

export default connectDB 


