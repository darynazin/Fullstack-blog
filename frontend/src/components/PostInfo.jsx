const PostInfo = ({ post }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="mt-4">{post.content}</p>
    </div>
  );
};

export default PostInfo;
