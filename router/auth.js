const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
require('../db/conn')
const User = require('../model/userSchema')
const bcrypt = require('bcryptjs')
const Authenticate = require('../middleware/Authenticate')

// router.get("/",(req,res)=>{
//     res.send("hello world form router")
// })
 
// router.get("/contact",(req,res)=>{
//     res.send("hello world by contact")
// })


// Register Router With Async Await

router.post('/register', async (req,res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please fill the data"})
    }

    try {
        const userExist = await User.findOne({ email:email });
        if(userExist){
            return res.status(422).json({error:"Email Already Exist"})
        }
        else if(password != cpassword){
            return res.status(422).json({error:"Password Does Not Match"})
        }
        else{
            const user = new User({name, email, phone, work, password, cpassword})

            await user.save()
    
            res.status(201).json({ message:"Register SuccessFully! " })
        }


        
    } catch (err) {
        console.log(err);
    }

})

// Login Router With Async Await

router.post('/signin', async (req,res)=>{
    // console.log(req.body);
    try {
        const { email, password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({error:"Please Fill The Data"})
        }

        const userLogin = await User.findOne({ email:email });
         
        // console.log(userLogin)
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password )
            const token = await userLogin.genrateAuthToken()
            console.log(token);
            
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({ message:"Invalid Cretintials" })
            }
            else{
                res.json({ message:"User Signin SuccessFully!" })
            }
        }
        else{
            res.status(400).json({ message:"Invalid Cretintials" })
        }
        
        
    } catch (err) {
        console.log(err);
    }
})

// About

router.get('/about',Authenticate,(req,res)=>{
    res.send(req.rootUser)
})

// Get Data for Contact Page

router.get('/getdata',Authenticate,(req,res)=>{
    res.send(req.rootUser)
})

// contact message data

router.post('/contact',Authenticate, async (req,res)=>{
    try {
        const {name,email,phone,message} = req.body;
        if(!name || !email || !phone || !message){
            alert("Please Fill The Data")
            return res.json({error:"Please Fill The Data"})
        }

        const userContact = await User.findOne({_id:req.userID})

        if(userContact){
            const userMessage = await userContact.addMessage(name,email,phone,message)

            await userContact.save()
            res.status(201).json({message:"message send successfully"})
        }

    } catch (error) {
        console.log(error)
    }
})

// Logout

router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'})
    res.status(201).send('user logout')
})

module.exports = router