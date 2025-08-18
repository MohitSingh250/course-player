const express = require("express")
const app = express()
const mongoose = require("mongoose")

const {userRouter} = require("./routes/user.js")
const {courseRouter} = require("./routes/course.js")
const {adminRouter} = require("./routes/admin.js")

app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin", adminRouter)

async function main(){
    await mongoose.connect("mongodb+srv://mscrick01:achievemongodb@cluster0.ovfkuhl.mongodb.net/course-player")
    app.listen(3000)
}
main()
