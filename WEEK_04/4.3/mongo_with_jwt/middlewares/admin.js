const secret = require ("../index");
const JWT_SECRET = require("../index");
const jwt = require("jsonwebtoken")
function adminMiddleware(req,res,next){

    const token = req.headers.authorization
    const words = token.split(" "); //to split bearer and token
    const jwtToken = words[1];
    
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
module.exports = adminMiddleware