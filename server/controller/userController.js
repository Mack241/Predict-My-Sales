import asyncHandler from 'express-async-handler'
import mysql from 'mysql'

const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    
    
    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        port: "3306"
    })

    con.connect((e) => {
        if(e) {
            console.error('Error', e)
        }

        let insertStatement = `SELECT * FROM Accounts where username = '${username}' and password = '${password}'`

        con.query(insertStatement, (err, result, fields) => {
            if(err){
                console.error(err)
                res.status(401)
                throw new Error('Invalid email or passowrd')
            }

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

const uploadDate = asyncHandler(async (req, res) => {
    const { currDate, username } = req.body
      
    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        port: "3306"
    })

    
    con.connect((e) => {
        if(e) throw e

        let query = `UPDATE Accounts SET Upload_Date = '${currDate}' where username = '${username}'`

        con.query(query, (err, result, fields) => {
            if(err) {
                console.log(err)
                res.status(401)
            }
            // console.log(result)
            res.json(result)
        } )
    })

})

const getDate = asyncHandler(async (req, res) => {
    const { username } = req.body

    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        port: "3306"
    })

    con.connect((e) => {
        if(e) throw e

        let query = `SELECT * FROM Accounts WHERE username = '${username}'`
        con.query(query, (err, result, fields) => {
            if(err){
                res.status(401)
                console.error(err)
            }
            res.json(result)
        })
    })
})

const uploadPredictDate = asyncHandler(async (req, res) => {
    const { fullDate, username } = req.body

    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        port: "3306"
    })

    con.connect((e) => {
        if(e) throw e

        let query = `UPDATE Accounts SET Predict_date = '${fullDate}' where username = '${username}'`

        con.query(query, (err, result, fields) => {
            if(err) {
               res.status(401)
               console.error(err)
            }

            res.json(result)
        })
    })

})

export { authUser, uploadDate, getDate, uploadPredictDate }