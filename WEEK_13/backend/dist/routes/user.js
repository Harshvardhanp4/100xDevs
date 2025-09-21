import { Router } from "express";
import prisma from "../prismaClient.js";
import jwt from "jsonwebtoken";
import { signupInput } from "@harshvardhanp4/medium-common";
export const userRouter = Router();
// Signup
import { ZodError } from "zod";
userRouter.post("/signup", async (req, res) => {
    try {
        // Validate input with Zod
        const parsed = signupInput.parse(req.body);
        const { name, email, password } = parsed;
        // Create user
        const user = await prisma.user.create({
            data: {
                name: name ?? null, // handle optional name
                email,
                password,
            },
        });
        // Create JWT
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
        res.json({ user, token: `Bearer ${token}` });
    }
    catch (error) {
        // Zod validation errors
        if (error instanceof ZodError) {
            return res.status(400).json({ message: "Validation failed" });
        }
        // Prisma unique constraint error
        if (error instanceof Error && error.message.includes("Unique constraint failed")) {
            return res.status(400).json({ message: "Email already exists" });
        }
        // Other errors
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