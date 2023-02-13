import express from 'express'

const router = express.Router()



import {Signup,LoginUser} from '../controller/UserController.js'


router.post('/login',LoginUser)

router.post('/signup',Signup)

export default router