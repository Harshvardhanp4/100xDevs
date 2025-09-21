import z from "zod";
//signup
export const signupInput = z.object({
    username: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    name: z.string().optional()
});
//signin    
export const signinInput = z.object({
    username: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
//create blog
export const createBlogInput = z.object({
    title: z.string().min(3).max(100),
    content: z.string().min(10).max(500)
});
//update blog
export const updateBlogInput = z.object({
    title: z.string().min(3).max(100).optional(),
    content: z.string().min(10).max(500).optional(),
});
//# sourceMappingURL=zod.js.map