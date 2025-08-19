const {Router} = require("express")
const {adminModel,courseModel} = require("../db")
const adminRouter = Router()
const jwt = require("jsonwebtoken")
const {jwt_admin_key} = require('../config.js')
const { adminmiddleware } = require("../middlewares/admin");

adminRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName} = req.body

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup completed"
    })
})
adminRouter.post("/signin", async function(req,res){
    const {email,password} = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if(admin){
        const token = jwt.sign({
            id: admin._id
        },jwt_admin_key)

    res.json({
        token: token
        })
    }else{
        res.status(403).json({
            message: "invalid credentials"
        })
    }
})
adminRouter.post("/course", adminmiddleware, async function(req,res){

    const adminId = req.userId;
    const {title,description,imageUrl,price} = req.body

    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId
    })

    res.json({
        message: "course created",
        courseId: course._id
    })
})
adminRouter.put("/course", function(req,res){
    res.json({
        message: "signin endpoint"
    })
})
adminRouter.get("/courses/bulk", function(req,res){
    res.json({
        message: "purchased courses endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}