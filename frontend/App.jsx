import { Link, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import CreatePost from "./src/pages/CreatePost";
import PostDetails from "./src/pages/PostDetails";

function App() {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
