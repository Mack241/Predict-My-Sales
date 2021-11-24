import asyncHandler from 'express-async-handler'
import mysql from 'mysql'

const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    })

    con.connect((e) => {
        if(e) throw error

        let insertStatement = `SELECT * FROM Accounts where username = '${username}' and password = '${password}'`

        con.query(insertStatement, (err, result, fields) => {
            if(err){
                console.error(err)
            }
            console.log(result[0])
            res.send()
        })
    })
})

export { authUser }