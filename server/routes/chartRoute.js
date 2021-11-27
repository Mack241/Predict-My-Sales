import express from 'express'
import { getChartData } from '../controller/chartDataController.js'

const router = express.Router()

router.get('/', getChartData)

export default router