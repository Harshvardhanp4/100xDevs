const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory todos list
let todos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build Todo App', completed: true }
  ,
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build Todo App', completed: true }
];

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST a new todo
app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: Date.now(),
    title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT (update) a todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, title, completed } : todo
  );
  res.json({ message: 'Todo updated' });
});

// DELETE a todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: 'Todo deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
