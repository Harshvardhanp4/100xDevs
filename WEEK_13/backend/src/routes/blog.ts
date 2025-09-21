import { Router, type Request, type Response } from "express";
import { authMiddleware, type AuthRequest } from "../middlewares/auth.js";
import prisma from "../prismaClient.js";
import { ca } from "zod/locales";
export const blogRouter = Router();

// protected routes
blogRouter.use(authMiddleware);
 
// Create Blog

blogRouter.post("/", async (req: AuthRequest, res: Response) => {
    const blog = await prisma.blog.create({
        data:{
            title:req.body.title,
            content:req.body.content,
            authorId:req.user!.id
        }

    });
     res.json({message: "Blog Created! ", id: blog.id})
   

});

// Update Blog

blogRouter.put("/", async(req: AuthRequest, res: Response) => {
    const blog = await prisma.blog.update({
        where:{
            id:req.body.id
        },
        data:{
            title:req.body.title,
            content:req.body.content
        }});
        res.json({message:"Blog Updated! ", id: blog.id})
});

// Get blog by id

blogRouter.get("/", async(req: AuthRequest, res: Response) => {
    try{
        const blog = await prisma.blog.findFirst({
        where:{
            id: req.body.id
        }
    });
    res.json({blog});
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
});

// Get all blogs //add pagination later

blogRouter.get("/bulk",async(req:Request,res:Response)=>{
    const blogs = await prisma.blog.findMany();
    res.json({blogs});

});