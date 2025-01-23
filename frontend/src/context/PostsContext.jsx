import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    cover: "",
    id: "",
  });

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const setUpdateForm = (post) => {
    setForm(post);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log("Form:", form);
    try {
      await axios.post(`${VITE_BASE_URL}/posts`, {
        author: form.author,
        title: form.title,
        content: form.content,
        cover: form.cover,
      });
      setForm({ author: "", title: "", content: "", cover: "" });
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      await axios.put(`${VITE_BASE_URL}/posts/${form.id}`, {
        author: form.author,
        title: form.title,
        content: form.content,
        cover: form.cover,
      });
      setForm({ author: "", title: "", content: "", cover: "" });
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

  return (
    <PostsContext.Provider
      value={{
        posts,
        form,
        setForm,
        handleChange,
        setUpdateForm,
        handleCreate,
        handleUpdate,
        handleDelete,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const {
    posts,
    form,
    setForm,
    handleChange,
    setUpdateForm,
    handleCreate,
    handleUpdate,
    handleDelete,
  } = useContext(PostsContext);

  return {
    posts,
    form,
    setForm,
    handleChange,
    setUpdateForm,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};
