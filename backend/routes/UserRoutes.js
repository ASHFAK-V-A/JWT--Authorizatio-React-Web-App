import express from 'express'
const router = express.Router()



import {Signup} from '../controller/UserController.js'

router.post('/signup',Signup)

export default router