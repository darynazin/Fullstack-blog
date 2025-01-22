import { Link, Routes, Route, Router } from "react-router-dom";
import Home from "./src/pages/Home";
import CreatePost from "./src/pages/CreatePost";
import PostDetails from "./src/pages/PostDetails";
import EditPost from "./src/pages/EditPost";

import { useState, useEffect } from "react";
import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    id: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${VITE_BASE_URL}/posts`, {
        title: form.title,
        content: form.content,
      });
      setForm({ title: "", content: "", id: "" });
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${VITE_BASE_URL}/posts/${form.id}`, {
        title: form.title,
        content: form.content,
      });
      setForm({ title: "", content: "", id: "" });
      setIsUpdating(false);
      fetchPosts();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${VITE_BASE_URL}/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const setUpdateForm = (post) => {
    setForm(post);
    setIsUpdating(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <h1>Photo Blog</h1>
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link
              to="/"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Create Post
            </Link>
          </li>
        </ul>
      </nav>

      <main className="p-8">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  posts={posts}
                  handleDelete={handleDelete}
                  setUpdateForm={setUpdateForm}
                />
              }
            />
            <Route
              path="/create"
              element={
                <CreatePost
                  handleCreate={handleCreate}
                  handleUpdate={handleUpdate}
                  form={form}
                  isUpdating={isUpdating}
                  handleChange={handleChange}
                />
              }
            />
            <Route
              path="/post/:id"
              element={<PostDetails handleDelete={handleDelete} />}
            />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
