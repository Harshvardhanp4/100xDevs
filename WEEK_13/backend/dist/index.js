import express from "express";
const PORT = 3000;
const app = express();
app.use(express.json());
// User Endpoints
app.post("/api/v1/signup", (req, res) => {
    console.log("Signup Endpoint");
    res.send("Signup Endpoint");
});
app.post("api/v1/signin", (req, res) => {
    console.log("Signin Endpoint");
    res.send("Signin Endpoint");
});
//Blog Endpoints
//create blog
app.post("/api/v1/blogs", (req, res) => {
    console.log("Create Blog Endpoint");
    res.send("Create Blog Endpoint");
});
//Update blog
app.put("/api/v1/blogs/", (req, res) => {
    console.log("Update Blog Endpoint");
    res.send("Update Blog Endpoint");
});
//Get blog by id
app.get("/api/v1/blogs/:id", (req, res) => {
    console.log("Get All Blogs Endpoint");
    res.send("Get All Blogs Endpoint");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
//# sourceMappingURL=index.js.map