import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import CreatePost from "./src/pages/CreatePost";
import PostDetails from "./src/pages/PostDetails";
import EditPost from "./src/pages/EditPost";
import MainLayout from "./src/components/MainLayout";
import { PostsProvider } from "./src/context/PostsContext";

function App() {
  return (
    <>
      <PostsProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/edit-post/:id" element={<EditPost />} />
              <Route path="/create" element={<CreatePost />} />
            </Route>
          </Routes>
        </Router>
      </PostsProvider>
    </>
  );
}

export default App;
