import { useState, useEffect } from "react";
import axios from "axios";

export default function GetPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Chiamata GET limitata ai primi 3 risultati
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div className="api-card">
      <h2>1. Lettura (GET)</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>ID {post.id}:</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
