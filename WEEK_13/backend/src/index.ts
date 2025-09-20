import prisma from "./prismaClient.js";
import express from "express";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middlewares/auth.js";


const PORT = 3000;
const app = express();

app.use(express.json());

// User Endpoints

app.post("/api/v1/signup",async (req:Request,res:Response)=>{
    const {name, email, password} = req.body;
    const user =  await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    });
    const token = jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET as string);
    res.json({ user, token: `Bearer ${token}` });
});

app.post("/api/v1/signin",async(req:Request,res:Response)=>{
   const {email,password} = req.body;
   const user = await prisma.user.findUnique({
    where:{
        email
    }
   });
   if(!user || user.password !== password){
    return res.status(401).json({message:"Invalid Credentials"});
   }
   const token = jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET as string);
   res.json({user,token: `Bearer ${token}`});
})

//Blog Endpoints


//create blog
app.post("/api/v1/blogs",authMiddleware,  async(req,res)=>{
    console.log("Create Blog Endpoint");
    res.send("Create Blog Endpoint");
});

//Update blog
app.put("/api/v1/blogs/",authMiddleware, (req,res)=>{
    console.log("Update Blog Endpoint");
    res.send("Update Blog Endpoint");
});

//Get blog by id
app.get("/api/v1/blogs/:id",authMiddleware,(req:Request,res:Response)=>{
    console.log("Get All Blogs Endpoint");
    res.send("Get All Blogs Endpoint");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;