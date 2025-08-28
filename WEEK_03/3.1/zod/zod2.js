
const express = require("express")
const app = express();

const z = require("zod");

function validateInput(obj){

   const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})
    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({

        email: "harsh@gmail.com",
        password: "12345678"

});

app.post('/login',function(req,res){
    const inputs = req.body;
    const response = validateInput(req.body)
    if(!response.sucess)({
        msg: "Something is wrong with inputs"
    })
    return;
})

