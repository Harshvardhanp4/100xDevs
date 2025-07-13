const { User } = require("../db")

function userMiddleware(req,res,next){

    const username = req.headers.username;
    const password = req.headers.password;
    //implement auth logic this middleware is to handle
    //auth
    //need to check headers and validate user
    //from user db

     User.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg: "User doesn't exist!"
            })
        }
    })


}

module.exports = userMiddleware;