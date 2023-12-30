const express = require("express")
const router = express.Router()
const cors = require('cors')
const connection = require('../models/db')
const {test,loginUser,getProfile,registerUser,verifyMail, createCampaign,PasswordReset,NewPassword, stripeIntegration,logsout,fetchURL} = require('../controllers/authControllers')
const {hashPassword,comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
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
router.get('/profile',getProfile,(req,res)=>{
    return res.json({Status:"Success",name:req.name})
})
router.get('/verify/:id/:expirationTimestamp', verifyMail)
router.get('/logout',logsout)
router.post('/ResetPassword', PasswordReset)
router.post('/ForgotPassword/:id/:token', NewPassword)
router.post('/fundraiser', createCampaign)
router.post('/donate', stripeIntegration)
router.get('/image/:img_link', fetchURL)


module.exports = router