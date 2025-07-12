const { Admin } = require("../db/index")

async function adminMiddleware(req,res,next){

    //implement auth logic this middleware is to handle
    //auth
    //need to check headers and validate admin
    //from admin db

    const username = req.headers.username;
    const password = req.headers.password;

    const value  = await Admin.findOne({
        username: username,
        password: password
    });

    if(value){
        next();
    }
    else{
        res.status(403).json({
            msg: "Admin doesn't exist!"
        })
    }
    
}

module.exports = adminMiddleware;