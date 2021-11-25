import mysql from 'mysql'
import asyncHandler from 'express-async-handler'

const fetchData = asyncHandler(async (req, res) => {

    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    })

    con.connect((e) => {
        if(e) throw error

        let query = 'SELECT * FROM DATA'

         con.query(query, (err, result, fields) => {
            if(err) {
                res.status(401)
                console.error(err)
            }
            // console.log(result[0])
            res.json(result)
        })
    })
})

const deleteData = asyncHandler(async (req, res) => {

    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    })

    con.connect((e) => {
        if(e) throw e

        let query = 'DELETE FROM DATA'
        con.query(query, (err, result, fields) => {
            if(err) {
                res.status(401)
                console.error(err)
            }
            res.json({ result })
        })
    })
})

export { fetchData, deleteData }