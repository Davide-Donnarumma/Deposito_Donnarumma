import { useState, useEffect } from "react";
import axios from "axios";
import SubmitButton from "./SubmitButton";

export default function JsonPlaceholderGet() {
  const [posts, setPosts] = useState([]);

  // Struttura standard richiesta da JSONPlaceholder
  const [nuovoPost, setNuovoPost] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  // CHIAMATA GET
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => setPosts(response.data));
  }, []);

  // GESTIONE DEL FORM
  const gestisciInput = (e) => {
    const { name, value } = e.target;
    setNuovoPost({ ...nuovoPost, [name]: value });
  };

  // CHIAMATA POST
  const inviaDatiAllApi = (datiDaInviare) => {
    if (!datiDaInviare.title || !datiDaInviare.body) return;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", datiDaInviare)
      .then((response) => {
        const postCreato = { ...response.data, id: Date.now() };

        setPosts([postCreato, ...posts]);

        setNuovoPost({ title: "", body: "", userId: 1 });
      });
  };

  // RENDERING DELL'INTERFACCIA
  return (
    <div className="api-container">
      <div className="form-box">
        <h3>Aggiungi un nuovo Post</h3>
        <input
          type="text"
          name="title"
          placeholder="Titolo del post"
          value={nuovoPost.title}
          onChange={gestisciInput}
        />
        <textarea
          name="body"
          placeholder="Contenuto del post..."
          value={nuovoPost.body}
          onChange={gestisciInput}
        />

        <SubmitButton datiForm={nuovoPost} funzionePost={inviaDatiAllApi} />
      </div>

      <hr />

      <div className="post-list">
        <h3>Tutti i Post</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
