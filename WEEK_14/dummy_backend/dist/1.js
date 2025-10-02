import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
// Dummy user data
const users = [
    { id: 1, name: "Harshvardhan Patil", address: "Pune, India", email: "harsh@example.com" },
    { id: 2, name: "John Doe", address: "New York, USA", email: "john@example.com" }
];
// Routes
app.get("/users", (req, res) => {
    res.json(users);
});
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (user)
        res.json(user);
    else
        res.status(404).json({ message: "User not found" });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=1.js.map