import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import prisma from "../prismaClient.js";
export const blogRouter = Router();
// protected route
blogRouter.use(authMiddleware);
// Create Blog
blogRouter.post("/", async (req, res) => {
    try {
        const blog = await prisma.blog.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                authorId: req.user.id
            }
        });
        res.json({ message: "Blog Created! ", id: blog.id });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Update Blog
blogRouter.put("/", async (req, res) => {
    try {
        const blog = await prisma.blog.update({
            where: {
                id: req.body.id
            },
            data: {
                title: req.body.title,
                content: req.body.content
            }
        });
        res.json({ message: "Blog Updated! ", id: blog.id });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.message.includes("Record to update not found.")) {
                return res.status(404).json({ message: "Blog Not Found" });
            }
        }
    }
});
// Get all blogs //add pagination later
blogRouter.get("/bulk", async (req, res) => {
    const blogs = await prisma.blog.findMany();
    res.json({ blogs });
});
// Get blog by id
blogRouter.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Blog id is required in params" });
        }
        const blog = await prisma.blog.findUnique({
            where: {
                id
            }
        });
        if (!blog) {
            return res.status(404).json({ message: "Blog Not Found" });
        }
        res.json({ blog });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//# sourceMappingURL=blog.js.map