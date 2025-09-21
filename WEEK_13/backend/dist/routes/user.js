import { Router } from "express";
import prisma from "../prismaClient.js";
import jwt from "jsonwebtoken";
export const userRouter = Router();
// Signup
userRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    });
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
    res.json({ user, token: `Bearer ${token}` });
});
//Signin
userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;
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
});
//# sourceMappingURL=user.js.map