import express from 'express'

const router = express.Router()
import { adminLoign, blockUser, getAllUser, unblockuser } from '../controller/AdminController.js'


router.post('/',adminLoign)

router.get('/getUser',getAllUser)

router.post('/blockuser/:id',blockUser)

router.post('/unblockuser/:id',unblockuser)

export default router