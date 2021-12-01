import express from "express";
import path from 'path'
import csvtojson from 'csvtojson'
import mysql from 'mysql'


const __dirname = path.resolve()

const router = express.Router()

router.post('/', async (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' })
    }

    const file = req.files.file
    
    file.mv(`${__dirname}/server/public/uploads/${file.name}`, err => {
        if(err){
            console.error(err)
            res.status(500).send(err)
        }
    })

    const filePath = __dirname + `/server/public/uploads/${file.name}`

    let con = mysql.createConnection({
        host: process.env.localhost,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    })

     con.connect((e) => {
        if(e) throw e
        console.log('Database connected')

         csvtojson().fromFile(filePath).then(source => {
            for(let i = 0; i<source.length; i++){
                let ProducerNumber = source[i]["ProducerNumber"],
                    PremiumYear = source[i]["PremiumYear"],
                    ProductType = source[i]["ProductType"],
                    ProducerLOSMonths = source[i]["ProducerLOSMonths"]	,
                    WrittenPremium	 = source[i]["WrittenPremium"],
                    PolicyAnnualFee	 = source[i]["PolicyAnnualFee"] ,
                    CommissionAmount  = source[i]["CommissionAmount"]	,
                    PerformanceCredit	 = source[i]["PerformanceCredit"]
    
                    let insertStatement = `INSERT INTO Data(ProducerNumber, PremiumYear, ProductType, ProducerLOSMonths,
                                            WrittenPremium, PolicyAnnualFee, CommissionAmount, PerformanceCredit) 
                                            values(?,?,?,?,?,?,?,?)`
                    let items = [ProducerNumber,
                        PremiumYear,
                        ProductType ,
                        ProducerLOSMonths,
                        WrittenPremium,
                        PolicyAnnualFee,
                        CommissionAmount,
                        PerformanceCredit]
    
                        con.query(insertStatement, items, (err, res, fields) => {
                            if(err){
                                console.log("Unable to insert at row, ", i+1)
                                return console.log(err)
                            }
                        })
                        
                    }
            console.log("Items inserted succesfully")
        })
    })
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
   
})

export default router