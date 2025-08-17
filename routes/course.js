const {Router} = require("express")

const courseRouter = Router()


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

module.exports = {
    courseRouter: courseRouter
}