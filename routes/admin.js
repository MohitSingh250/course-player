const {Router} = require("express")

const adminRouter = Router()

adminRouter.post("/signup", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})
adminRouter.post("/signin", function(req,res){
    res.json({
        message: "signin endpoint"
    })
})
adminRouter.post("/course", function(req,res){
    res.json({
        message: "signin endpoint"
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