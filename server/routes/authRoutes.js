const multer = require('multer')

const express = require("express")
const router = express.Router()
const cors = require('cors')
const connection = require('../models/db')
const {test,loginUser,getProfile,registerUser,verifyMail, createCampaign,PasswordReset,NewPassword, stripeIntegration, uploadImage} = require('../controllers/authControllers')
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
router.post('/donate', stripeIntegration)

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,'server/public/')
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname)   
    }
})

const upload = multer({storage: storage})

router.post('/upload', upload.single('image'), uploadImage)


module.exports = router