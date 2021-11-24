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
                res.status(401)
                throw new Error('Invalid email or passowrd')
            }
            // console.log(result[0])
            res.json({
                _id: result[0].id,
                username: result[0].username,
                password: result[0].password,
                email: result[0].email,
                Role: result[0].Role,
                firstname: result[0].firstname,
                lastname: result[0].lastname,
                middlename: result[0].middlename
            })
        })
    })
})

export { authUser }