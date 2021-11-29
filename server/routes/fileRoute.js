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
                    PremiumMonth = source[i]["PremiumMonth"],
                    ProductType = source[i]["ProductType"],
                    ProducerPriorExperienceYears = source[i]["ProducerPriorExperienceYears"],	
                    ProducerEducation = source[i]["ProducerEducation"]	,
                    ProducerLOSMonths = source[i]["ProducerLOSMonths"]	,
                    ProducerAgeYears = source[i]["ProducerAgeYears"],	
                    ProducerRace	 = source[i]["ProducerRace"],
                    ProducerGender = source[i]["ProducerGender"]	,
                    ProducerMaritalStatus = source[i]["ProducerMaritalStatus"],	
                    ProducerRole = source[i]["ProducerRole"]	,
                    ProducerState	 = source[i]["ProducerState"],
                    PolicyIssueState = source[i]["PolicyIssueState"],	
                    PaymentFrequency = source[i]["PaymentFrequency"]	,
                    PolicyHolderAgeAtIssueYears	 = source[i]["PolicyHolderAgeAtIssueYears"],
                    PolicyHolderGender = source[i]["PolicyHolderGender"],	
                    SalesOfficeAtIssue = source[i]["SalesOfficeAtIssue"],
                    SalesTerritory = source[i]["SalesTerritory"],	
                    PaymentYear	 = source[i]["PaymentYear"],
                    PaymentModeAtIssue	 = source[i]["PaymentModeAtIssue"],
                    WrittenPremium	 = source[i]["WrittenPremium"],
                    PolicyAnnualFee	 = source[i]["PolicyAnnualFee"] ,
                    CommissionAmount  = source[i]["CommissionAmount"]	,
                    PerformanceCredit	 = source[i]["PerformanceCredit"],
                    CommissionablePremium = source[i]["CommissionablePremium"]
    
                    let insertStatement = `INSERT INTO Data values(?,?,?,?,?,?,?,?,?,?
                                                                ,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
                    let items = [ProducerNumber,
                        PremiumYear,
                        PremiumMonth,
                        ProductType ,
                        ProducerPriorExperienceYears,
                        ProducerEducation,
                        ProducerLOSMonths,
                        ProducerAgeYears,
                        ProducerRace,
                        ProducerGender,
                        ProducerMaritalStatus,
                        ProducerRole,
                        ProducerState,
                        PolicyIssueState,
                        PaymentFrequency,
                        PolicyHolderAgeAtIssueYears,
                        PolicyHolderGender,
                        SalesOfficeAtIssue,
                        SalesTerritory,
                        PaymentYear,
                        PaymentModeAtIssue,
                        WrittenPremium,
                        PolicyAnnualFee,
                        CommissionAmount,
                        PerformanceCredit,
                        CommissionablePremium]
    
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