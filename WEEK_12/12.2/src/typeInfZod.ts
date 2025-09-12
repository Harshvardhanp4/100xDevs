import { optional, z } from 'zod'
import express from "express";

const app = express();

const defineUserProfileSchema = z.object({
    name: z.string().min(1, {message: "Name cannot be empty"}),
    email: z.string().email({message: "Invalid email format"}),
    age: z.number().min(18,{message: "you must be atleast 18 yrs old"}).optional() // this will make optional
});

type FinalUserScema = z.infer<typeof defineUserProfileSchema>;

app.put("/user", (req,res)=>{
    const {success} = defineUserProfileSchema.safeParse(req.body);
    const updateBody:FinalUserScema = req.body;

    if(!success) {
        res.status(411).json({
            msg: "Something is wrong"
        });
        return
    }
    res.json({
        msg: "User updated!"
    })
    console.log(updateBody);
});
