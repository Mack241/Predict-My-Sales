import express from 'express'
import { deleteData, fetchData } from '../controller/dataController.js'

const router = express.Router()

router.get('/', fetchData)
router.get('/delete', deleteData)

export default router