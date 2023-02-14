import express from 'express'

const router = express.Router()
import { adminLoign, getAllUser } from '../controller/AdminController.js'


router.post('/',adminLoign)

router.get('/getUser',getAllUser)

export default router