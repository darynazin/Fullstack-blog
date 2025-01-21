const PostInfo = ({ post }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        {post.title}
      </h1>
      <p className="text-lg text-gray-700 mb-6">{post.content}</p>
    </div>
  );
};

export default PostInfo;
