const {Router} = require("express")
const {userModel} = require("../db.js")
const jwt = require("jsonwebtoken")
const userRouter = Router()
const {jwt_user_key} = require('../config.js')

userRouter.post("/signup", async function(req,res){

    const {email,password,firstName,lastName} = req.body

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup completed"
    })
})
userRouter.post("/signin", async function(req,res){

    const {email,password} = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user._id
        },jwt_secret_key)
        res.json({
        token: token
    })
    }else{
        res.status(403).json({
            message: "invalid credentials"
        })
    }



})
userRouter.get("/courses", function(req,res){
    res.json({
        message: "purchased courses endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}