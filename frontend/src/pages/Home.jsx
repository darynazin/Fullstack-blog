import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function Home() {
  const { posts } = usePosts();

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center py-10 w-11/12 mx-auto gap-4 mt-6">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No entries found.</p>
      ) : (
        posts.map((post) => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            className="card basis-[calc(30%-1.25rem)] min-w-[400px] sm:min-w-[250px] max-w-[500px] shadow-xl self-center"
          >
            <figure className="overflow-hidden">
              <img
                src={post.cover}
                alt="Post"
                className="h-[200px] w-full object-cover"
              />
            </figure>
            <div className="card-body py-2">
              <h2 className="card-title truncate">{post.title}</h2>
              <h2 className="line-clamp-2 overflow-hidden">{post.content}</h2>
              <div className="flex justify-between w-full">
                <h2 className="truncate text-gray-400">Author: {post.author}</h2>
                <h2 className="text-gray-400">{post.date.substring(0, 10)}</h2>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Home;
