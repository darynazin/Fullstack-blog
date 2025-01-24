import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, handleDelete, setUpdateForm } = usePosts();

  const post = posts.find((item) => item.id === parseInt(id, 10));

  if (!post) {
    return <p className="text-center text-gray-500 mt-24">Post deleted.</p>;
  }

  const handleEdit = () => {
    navigate(`/edit-post/${id}`);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="card bg-[#F8F2EA] w-1/2 shadow-xl mb-5 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full px-2 focus:outline-none"
        >
          &times;
        </button>

        <figure className="h-[25rem] w-full overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body pb-0">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content}</p>
          <p>Author {post.author}</p>
          <p>{post.date.substring(0, 10)}</p>
        </div>
        <div className="card-actions flex flex-row justify-end items-end p-4">
          <button
            onClick={() => {
              handleEdit();
              setUpdateForm(post);
            }}
            className="btn bg-[#D9C5A8] mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(post.id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
