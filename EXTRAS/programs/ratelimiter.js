const express = require("express");
const app = express();

let numberOfRequestsForUser = {};
const REQUEST_LIMIT = 5;

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
  const userId = req.headers["user-id"];

  if (!userId) {
    return res.status(400).json({ msg: "User-ID header missing" });
  }

  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 1;
  } else {
    numberOfRequestsForUser[userId]++;
  }

  if (numberOfRequestsForUser[userId] > REQUEST_LIMIT) {
    return res.status(429).json({ msg: "Too many requests. Please slow down." });
  }

  next();
});

app.get("/", (req, res) => {
  res.send("Request successful");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
