import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PostInfo from "../components/PostInfo";
import DeleteButton from "../components/DeleteButton";
import UpdateButton from "../components/UpdateButton";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchedPost = {
      id,
      title: `Post ${id}`,
      content: `This is post ${id}`,
    };
    setPost(fetchedPost);
  }, [id]);

  const handleDelete = () => {
    console.log(`Post with id ${id} deleted`);
    navigate("/");
  };

  const handleUpdate = () => {
    console.log(`Post with id ${id} updated`);
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <PostInfo post={post} />
      <div className="flex justify-between">
        <DeleteButton onClick={handleDelete} />
        <UpdateButton onClick={handleUpdate} />
      </div>
    </div>
  );
};

export default PostDetails;
