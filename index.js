const express = require("express")
const app = express()

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
app.get("/courses/purchases", function(req,res){
    res.json({
        message: "purchases endpoint"
    })
})
app.get("/courses", function(req,res){
    res.json({
        message: "purchased courses endpoint"
    })
})




app.listen(3000)