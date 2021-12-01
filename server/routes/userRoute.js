import express from 'express'
import { authUser, getDate, uploadDate, uploadPredictDate } from '../controller/userController.js'

const router = express.Router()

router.post('/login', authUser)

router.post('/upload_date', uploadDate)

router.post('/get_date', getDate)

router.post('/upload_predict_date', uploadPredictDate)

export default router