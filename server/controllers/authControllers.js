const {hashPassword,comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer=require('nodemailer')
const connection = require('../models/db')
const { renderToString } = require('react-dom/server');

//const EmailVerify = require('../../client/src/pages/EmailVerify')
const test = (req,res) => {
    res.json("test is working")
} 
//email verification api
const sendVerifyEmail = async (name, email, id) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 25,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'needaspeed639@gmail.com',
                pass: 'qsws dzzd gokz uytu',
            },
        });
        

        const expirationTimestamp = Math.floor(new Date().getTime() / 1000)

        const mailOptions = {
            from: 'needaspeed639@gmail.com',
            to: email,
            subject: 'Email Verification',
            html: `<p>Hii ${name} Please click the link below</p> <a href="http://localhost:5173/verify/${id}/${expirationTimestamp}">Verify</a>`,
        };

        const data = await transporter.sendMail(mailOptions);
        console.log('EMAIL SENT ', email, data.response);
    } catch (error) {
        console.error('Error sending verification email:', error.message);
    }
};

const verifyMail = async (req, res) => {
    try {
        const { id, expirationTimestamp } = req.params;
        const currentTimestamp = Math.floor(new Date().getTime() / 1000);
        const expirationTime = 20; // 60 seconds
        connection.query('SELECT verified FROM user WHERE id =?', [id], (errors, resu) => {
            if (errors) {
                throw errors;
            } else if ((parseInt(currentTimestamp) - parseInt(expirationTimestamp) > parseInt(expirationTime))) {
                // Verification link has expired or user is already verified.
                if(resu[0] && resu[0].verified===0){
                connection.query('DELETE FROM user WHERE id = ?', [id], (deleteErrors, deleteResult) => {
                    if (deleteErrors) {
                        console.error('Error deleting user:', deleteErrors);
                        res.status(500).sen0d('Error deleting user');
                    } else {
                        res.status(400).send('Verification link has expired, or user is already verified, and user has been deleted.');
                    }
                })};
            } else {
                connection.query('UPDATE user SET verified = 1 WHERE id = ?', [id], (updateErrors, updateResult) => {
                    if (updateErrors) {
                        console.error('Error updating user:', updateErrors);
                        res.status(500).send({message:'Error updating user'});
                    } else {
                        res.status(200).send({ message: 'Email verified successfully' });
                    }
                });
            }
        });
    } catch (error) {
        console.error('Error verifying email:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};




//register end point
const registerUser = async (req,res) => {
 try {
    const{name,email,password} = req.body;
    if(!name){
        return res.json({
            error:'name is required'
        })
    }
        if(!password || password.length < 6){
            return res.json({
                error:'Password is required and must be 6 characters long'
            })
    }
    const sqlQuery = 'SELECT EmailAddress FROM user WHERE EmailAddress = ? LIMIT 1;';
 connection.query(sqlQuery, [email], async (err,result) => {
    if(err) throw err;
    if(result[0]) return res.json({error:'EMAIL IS TAKEN ALREADY'})
    else{
        const hashedPassword=await hashPassword(password)
        connection.query('INSERT INTO user SET ?;', {FullName:name, EmailAddress:email, Password:hashedPassword,verified:0},(error,re)=>{
            if(error) throw error;
            connection.query('SELECT id FROM user WHERE EmailAddress =?',[email],async(errors,resu)=>{
            if(errors) throw errors;       
            console.log(resu[0]) 
            sendVerifyEmail(name,email,resu[0].id)
            })
            return res.json({succes:'User has been registered,Please Verify Email to Log in'})

        });
}
});
// const [rows] = await
    // Check if there are any rows in the result
    // if (rows.length > 0) {
    //     return res.json({
    //         error: "Email is taken already",
    //     });
    // }
    // Check Email 
    //await used whenn database element call
    
    // const user = await User.create({
    //     name,email,password:hashedPassword
    // })
 } catch (error) {
    console.log(error)
 }
}
//login USer
const loginUser = async (req,res)=>{
 try {
    const {email,password} = req.body
    //checks email and password by user exists
    //const user = await User.findOne({email});
    connection.query('SELECT * FROM user WHERE EmailAddress =?',[email],async (err,result)=>{
        if (err) throw err 
        console.log(result)
        if((!result.length || !await bcrypt.compare(password,result[0].Password)) || !result[0].verified) 
        return res.json({error:'Incorrect Email or Password'})
        else {
            const fullName = result[0].FullName;

            // Split the full name based on spaces
            const fullNameArray = fullName.split(' ');

            // Extract the first name (assuming it's the first element after splitting)
            const firstName = fullNameArray[0];
                //cookie token
            const token = jwt.sign({FullName:firstName},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES})
            const cookiesOptions = {
                expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES *24*60*60*1000),
                httpOnly:true
            }
            res.cookie('token', token)
            res.json({ success: 'Successfully Login' });
        }
    })
//    if (match){

//     jwt.sign({email:user.email,id:user._id,name:user.name},process.env.JWT_SECRET,{},(err,token)=>{
//         if(err) throw err;
//         res.cookie('token',token).json(user)
//     })
//    } 
//    if(!match){
//    res.json({error:'Not match'})
//    }
 } catch (error) {
    console.log(error)
 }
}
//
const logsout= (req,res) => {
    res.clearCookie('token')
    return res.json({Status:"Success"})
}
const getProfile = (req,res,next)=>{
    const token =req.cookies.token
    if (token) {
        jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
            if(err){
                return res.json({Message:"Authentication Error"})
            } else{
                req.name = user.FullName,
                req.email = user.EmailAddress,
                req.id = user.id
                next()
            }
        })
    } 
    else{
       return res.json(null)
    }
}
const PasswordReset = (req, res) => {
    const { email } = req.body
    connection.query('SELECT * FROM user WHERE EmailAddress =?', [email], async (err, result) => {
        if (err) throw err
        if (!result.length) {
            return res.json({
                error: 'Email doesnt exists!'
            })
        }
        else {
            const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: 60 })
            const id = result[0].id
            emailNewPass(id,token,email)
            return res.json({success:'An email has been sent'})
    }})
}
const emailNewPass = async (id,token,email) =>{
    url = `http://localhost:5173/ForgotPassword/${id}/${token}`
            try {
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 25,
                    secure: false,
                    requireTLS: true,
                    auth: {
                        user: 'needaspeed639@gmail.com',
                        pass: 'qsws dzzd gokz uytu',
                    },
                });
                const mailOptions = {
                    from: 'needaspeed639@gmail.com',
                    to: email,
                    subject: 'Password Reset',
                    html: `<p>Please click the link below to RESET Password </p> <a href="${url}">Verify</a>`,
                };
                
                const data = await transporter.sendMail(mailOptions);
                console.log('EMAIL SENT ', email, data.response);
        }
            catch (error) {
                console.error('Error sending verification email:', error.message);
            }
}
const NewPassword = (req, res) => {
    const { id, token } = req.params
    const { password } = req.body
    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) {
            return res.json({
                error: 'Session Expired'
            })
        }
        else {
            if (!password || password.length < 6) {
                return res.json({
                    error: 'Password is required and must be 6 characters long'
                })
            }
            else {
                const hashedPassword = await hashPassword(password)
                connection.query(
                    'UPDATE user SET password = ? WHERE id = ?',
                    [hashedPassword, id],
                    (updateErr, updateResult) => {
                        if (updateErr) {
                            return res.json({
                                error: 'Error updating password',
                            });
                        }
                        return res.json({
                            success: 'Password updated successfully',
                        });
                    }
                );
            }
        }
    })
}

const createCampaign = async (req,res)=>{
    const receivedData = req.body;
    // Process the received data as needed
    console.log(receivedData);
    res.json({ message: 'Data received successfully' });
    connection.query('INSERT INTO fundraise SET ?;', { title: receivedData.title, description: receivedData.description, startDate: new Date(),goalAmount: receivedData.goal, currentAmount: 0, active:true  },(error,re)=>{
        if(error) throw error;
        console.log(re)
    });

}

const fetchFundraise = async (req, res) => { 

    const { isActive } = req.params;
    console.log(isActive)
    const sqlQuery = 'SELECT * FROM fundraise WHERE active = ?;';
    connection.query(sqlQuery, [isActive=="true"? 1:0 ], (err, result) => {
        if (err) {
            console.error('Error fetching fundraise:', err);
            res.status(500).send({ message: 'Internal Server Error' });
        } else {
            res.status(200).send({ message: 'Fundraise fetched successfully', data: result });
        }
        console.log(result[0])
    });
}

const stripeIntegration = async (req, res) => { }


module.exports = { test, registerUser, loginUser, getProfile, verifyMail, PasswordReset, NewPassword, createCampaign, stripeIntegration,logsout, fetchFundraise}