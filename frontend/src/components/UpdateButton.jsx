const UpdateButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
    >
      Update Post
    </button>
  );
};

export default UpdateButton;
