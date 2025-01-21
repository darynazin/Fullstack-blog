const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
    >
      Delete Post
    </button>
  );
};

export default DeleteButton;
