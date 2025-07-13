const secret = require ("../index");
const JWT_SECRET = require("../index");
const jwt = require("jsonwebtoken")

function userMiddleware(req,res,next){

    const token = req.headers.authorization
    console.log(headers)
    const words = token.split(" "); //to split bearer and token
    const jwtToken = words[1];
    console.log(jwtToken)

    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.username){
            next();
        }
        else{
            res.status(403).json({
                msg: "You are not authenticated! "
            });
        }
    }
    catch(e){
        res.json({
            msg: "Incorrect Token!"
        })
    }




}
module.exports = userMiddleware