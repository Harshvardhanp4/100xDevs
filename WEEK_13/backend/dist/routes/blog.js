import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
export const blogRouter = Router();
// protected routes
blogRouter.use(authMiddleware);
// Create Blog
blogRouter.post("/", async (req, res) => {
    console.log("Create Blog Endpoint");
    res.send("Create Blog Endpoint");
});
// Update Blog
blogRouter.put("/", (req, res) => {
    console.log("Update Blog Endpoint");
    res.send("Update Blog Endpoint");
});
// Get blog by id
blogRouter.get("/:id", (req, res) => {
    console.log("Get Blog by ID Endpoint");
    res.send("Get Blog by ID Endpoint");
});
//# sourceMappingURL=blog.js.map