// backend/todos.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 5000;

const titles = [
  "Buy groceries",
  "Clean the house",
  "Finish assignment",
  "Read a book",
  "Go for a run",
  "Prepare dinner",
  "Water the plants",
  "Reply to emails",
  "Call a friend",
  "Organize files"
];

function generateTodo(id) {
  return {
    id: id,
    title: titles[Math.floor(Math.random() * titles.length)],
    completed: Math.random() > 0.5
  };
}

app.get("/todos", (req, res) => {
  const count = parseInt(req.query.count) || 5;
  const todos = Array.from({ length: count }, (_, i) => generateTodo(i + 1));
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
