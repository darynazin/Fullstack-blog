import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function Home() {
  const { posts } = usePosts();

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center py-10 w-11/12 mx-auto gap-4 max-w-screen-xl mt-6">
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
                className="h-[300px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title truncate">{post.title}</h2>
              <h2 className=" truncate">Author {post.author}</h2>
              <h2 className=" truncate">{post.content}</h2>
              <p>{post.date.substring(0, 10)}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Home;
