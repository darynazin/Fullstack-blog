import { usePosts } from "../context/PostsContext";
import { useNavigate } from "react-router-dom";

function EditPost() {
  const { handleUpdate, form, handleChange } = usePosts();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 w-1/3 mt-16">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Edit Post
      </h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Cover</label>
          <input
            type="text"
            name="cover"
            placeholder="Cover"
            value={form.cover}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div className="text-center">
          <button 
            onClick={() => navigate("/")}
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Update
            
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
