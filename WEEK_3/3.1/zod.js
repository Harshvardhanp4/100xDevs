const express = require("express")
const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());
const schema = zod.object({
    email : zod.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US"))
})

app.use(express.json()); //if we dont use this then you cant get body

app.post("/health-check", (req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
   

    res.send({
        response
    })
});

  

app.listen(3000);