import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";


function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, handleDelete, setUpdateForm } = usePosts();


  const post = posts.find((item) => item.id === parseInt(id, 10));

  if (!post) {
    return <p className="text-center text-gray-500">Post not found.</p>;
  }

  const handleEdit = () => {
    navigate(`/edit-post/${id}`);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <div className="card bg-base-300 w-1/2 shadow-xl mb-5 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full px-2 focus:outline-none"
        >
          &times;
        </button>

        <figure className="h-[30rem] w-full overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">{post.title}</h2>
          <p className="text-start">{post.content}</p>
          <p className="text-start">{post.author}</p>
          <p className="text-start">{post.date}</p>
        </div>
        <div className="card-actions flex flex-row justify-end items-end p-4">
          <button onClick={() => {handleEdit(); setUpdateForm(post)}} className="btn btn-active mr-2">
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
