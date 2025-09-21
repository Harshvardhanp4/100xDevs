import { Router } from "express";
import prisma from "../prismaClient.js";
import jwt from "jsonwebtoken";
import { signupInput, signinInput } from "@harshvardhanp4/medium-common";
import { ZodError } from "zod";
import bcrypt from "bcrypt";
export const userRouter = Router();
//Token Generation
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};
// Signup
userRouter.post("/signup", async (req, res) => {
    try {
        // Validate input with Zod
        const parsed = signupInput.parse(req.body);
        const { name, email, password } = parsed;
        const hashedPassword = await bcrypt.hash(password, 10); // In production, hash the password before storing
        // Create user
        const user = await prisma.user.create({
            data: {
                name: name ?? null, // handle optional name
                email,
                password: hashedPassword,
            },
        });
        // Create JWT
        const token = generateToken(user.id);
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
        const parsed = signinInput.parse(req.body);
        const { email, password } = parsed;
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user.id);
        res.json({ user, token: `Bearer ${token}` });
    }
    catch (error) {
        console.error("Signin", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
//# sourceMappingURL=user.js.map