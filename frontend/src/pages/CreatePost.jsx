import { usePosts } from "../context/PostsContext";
import { Link } from "react-router-dom";

function CreatePost({}) {
  const { handleCreate, handleChange, form } = usePosts();

  return (
    <div className="container mx-auto p-4 w-1/3 mt-16">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-500">
        Create Post
      </h1>
      <form onSubmit={handleCreate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Author</label>
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
          <label className="block text-sm font-medium">Title</label>
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
          <label className="block text-sm font-medium">Content</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Cover</label>
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
            type="submit"
            className="px-4 py-2 bg-[#D9C5A8] text-white rounded"
          >
            <Link to="/">Create</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
