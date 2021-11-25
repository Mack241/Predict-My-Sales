import express from 'express'
import { fetchData } from '../controller/dataController.js'

const router = express.Router()

router.get('/', fetchData)

export default router