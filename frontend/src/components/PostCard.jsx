import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link
        to={`/post/${post.id}`}
        className="text-xl text-blue-500 hover:underline"
      >
        {post.title}
      </Link>
    </li>
  );
};

export default PostCard;
