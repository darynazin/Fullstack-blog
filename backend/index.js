import express from "express";
import dotenv from "dotenv";
import queryDB from "./db.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Get all posts
app.get("/posts", async (req, res) => {
  const posts = await queryDB("SELECT * FROM posts");
  res.json(posts);
});

// Get post by ID
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await queryDB("SELECT * FROM posts WHERE id = $1", [id]);
  res.json(post[0]);
});

// Create a new post
app.post("/posts", async (req, res) => {
  const { author, title, content, cover } = req.body;

  const newPost = await queryDB(
    "INSERT INTO posts (author, title, content, cover) VALUES ($1, $2, $3, $4 ) RETURNING *",
    [author, title, content, cover]
  );
  res.status(201).json(newPost[0]);
});

// Update post by ID
app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { author, title, content, cover } = req.body;

  const updatedPost = await queryDB(
    "UPDATE posts SET author = $1, title = $2, content = $3, cover = $4 WHERE id = $5 RETURNING *",
    [author, title, content, cover, id]
  );

  res.json(updatedPost[0]);
});

// Delete post by ID
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;

  const deletedPost = await queryDB(
    "DELETE FROM posts WHERE id = $1 RETURNING *",
    [id]
  );
  res.json(deletedPost[0]);
});

// Default 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
