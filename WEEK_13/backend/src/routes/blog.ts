import { Router, type Request, type Response } from "express";
import { authMiddleware } from "../middlewares/auth.js";

export const blogRouter = Router();

// protected routes
blogRouter.use(authMiddleware);

// Create Blog

blogRouter.post("/", async (req: Request, res: Response) => {
  console.log("Create Blog Endpoint");
  res.send("Create Blog Endpoint");
});

// Update Blog

blogRouter.put("/", (req: Request, res: Response) => {
  console.log("Update Blog Endpoint");
  res.send("Update Blog Endpoint");
});

// Get blog by id

blogRouter.get("/:id", (req: Request, res: Response) => {
  console.log("Get Blog by ID Endpoint");
  res.send("Get Blog by ID Endpoint");
});