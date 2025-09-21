
import express from "express";
import { userRouter } from "./routes/user.js";
import { blogRouter } from "./routes/blog.js";


const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/blog",blogRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;