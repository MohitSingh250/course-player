const jwt = require("jsonwebtoken")
const {jwt_user_key} = require('../config.js')


function usermiddleware(req,res,next){
    const token = req.header.token;
    const decoded = jwt.verify(token,jwt_user_key)

    if (decoded){
        req.userId = decoded.id
        next()
    }else{
        res.status(403).json({
            message: "you are not signed in"
        })
    }
}

module.exports = {
    usermiddleware
}