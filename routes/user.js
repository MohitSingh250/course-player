const {Router} = require("express")

const userRouter = Router()

app.post("/user/signup", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})
app.post("/user/signin", function(req,res){
    res.json({
        message: "signin endpoint"
    })
})
app.get("/user/courses", function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}