const jwt = require('jsonwebtoken');
const jwtPassword = "123456";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        return null;

    }

    const signature = jwt.sign({
        username,
     },jwtPassword)

     return signature;
}

function verifyJwt(token){
    const decoded= jwt.verify(token,jwtPassword);
    try{
        jwt.verify(token, jwtPassword);
        return true;
    }
    catch(e){

    }
    return false;
}

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}