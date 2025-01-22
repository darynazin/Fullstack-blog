import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PostInfo from "../components/PostInfo";
import DeleteButton from "../components/DeleteButton";
import UpdateButton from "../components/UpdateButton";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${VITE_BASE_URL}/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${VITE_BASE_URL}/posts/${id}`);
      console.log(`Post with id ${id} deleted`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleUpdate = () => {
    console.log(`Navigating to edit post with id ${id}`);
    navigate(`/edit/${id}`);
  };

  if (loading) return <div>Loading...</div>;

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <PostInfo post={post} />
      <div className="flex justify-between mt-4">
        <DeleteButton onClick={handleDelete} />
        <UpdateButton onClick={handleUpdate} />
      </div>
    </div>
  );
};

export default PostDetails;
