const express = require("express")
const router = express.Router()
const cors = require('cors')
const connection = require('../models/db')
const {test,loginUser,getProfile,registerUser,verifyMail, createCampaign,PasswordReset,NewPassword} = require('../controllers/authControllers')
const {hashPassword,comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer=require('nodemailer')
//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)
// route to actual route we want


router.get('/',test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile',getProfile)
router.get('/verify/:id/:expirationTimestamp', verifyMail)
router.post('/ResetPassword', PasswordReset)
router.post('/ForgotPassword/:id/:token', NewPassword)
router.post('/fundraiser', createCampaign)

module.exports = router