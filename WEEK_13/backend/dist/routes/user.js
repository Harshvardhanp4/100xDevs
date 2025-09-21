import { Router } from "express";
import prisma from "../prismaClient.js";
import jwt from "jsonwebtoken";
export const userRouter = Router();
// Signup
userRouter.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, Email and Password are required" });
        }
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
        res.json({ user, token: `Bearer ${token}` });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.message.includes("Unique constraint failed")) {
                return res.status(400).json({ message: "Email/ already exists" });
            }
        }
        res.status(500).json({ message: "Internal server error" });
    }
});
//Signin
userRouter.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
        res.json({ user, token: `Bearer ${token}` });
    }
    catch (error) {
        console.error("Signin", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
//# sourceMappingURL=user.js.map