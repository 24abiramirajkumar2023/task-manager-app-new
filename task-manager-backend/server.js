const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager Backend Running");
});

app.get("/tasks", (req, res) => {
  res.json([
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Build API" }
  ]);
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Abi" }
  ]);
});

app.get("/status", (req, res) => {
  res.json({ status: "Server Running" });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});