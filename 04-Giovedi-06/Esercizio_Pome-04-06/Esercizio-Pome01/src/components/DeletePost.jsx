import { useState } from "react";
import axios from "axios";

export default function DeletePost() {
  const [idPost, setIdPost] = useState("");
  const [messaggio, setMessaggio] = useState("");

  const eliminaPost = () => {
    if (idPost === "") return;

    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then(() => {
        setMessaggio(`Post ${idPost} eliminato con successo!`);
        setIdPost("");
      });
  };

  return (
    <div className="api-card">
      <h2>3. Eliminazione (DELETE)</h2>
      <input
        type="number"
        placeholder="ID del post da eliminare..."
        value={idPost}
        onChange={(e) => setIdPost(e.target.value)}
      />
      <button onClick={eliminaPost} className="btn-danger">
        Elimina
      </button>

      {messaggio && <p className="delete-msg"> {messaggio}</p>}
    </div>
  );
}
