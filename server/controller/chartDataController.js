import mysql from 'mysql'
import asyncHandler from 'express-async-handler'

const getChartData = asyncHandler (async (req, res) => {

    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    })

    con.connect((e) => {
        if(e) throw e

        let query = 'SELECT WrittenPremium, PolicyAnnualFee, CommissionAmount, PerformanceCredit FROM DATA'

        con.query(query, (err, result, fields) => {
            if(err) {
                res.status(401)
                console.log(err)
            }
            // console.log(result)
            res.json(result)
        })
    })
})

export { getChartData }