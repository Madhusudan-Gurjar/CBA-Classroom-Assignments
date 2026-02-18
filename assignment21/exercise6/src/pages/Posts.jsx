import { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH POSTS
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  // ADD POST
  const addPost = () => {
    if (!title) return;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
      })
      .then((response) => {
        setPosts([response.data, ...posts]);
        setTitle("");
      })
      .catch(() => {
        alert("Failed to add post");
      });
  };

  // DELETE POST
  const deletePost = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch(() => {
        alert("Failed to delete post");
      });
  };

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div>
      <h2>Posts</h2>

      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>

      <hr />

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>{post.title}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Posts;
