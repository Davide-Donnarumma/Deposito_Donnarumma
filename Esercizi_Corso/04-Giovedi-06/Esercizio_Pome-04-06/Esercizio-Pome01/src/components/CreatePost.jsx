import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [titolo, setTitolo] = useState("");
  const [risultato, setRisultato] = useState(null);

  const inviaPost = () => {
    if (titolo === "") return;

    const nuovoDato = { title: titolo, body: "Contenuto test", userId: 1 };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", nuovoDato)
      .then((response) => {
        setRisultato(response.data);
        setTitolo("");
      });
  };

  return (
    <div className="api-card">
      <h2>2. Creazione (POST)</h2>
      <input
        type="text"
        placeholder="Scrivi un titolo..."
        value={titolo}
        onChange={(e) => setTitolo(e.target.value)}
      />
      <button onClick={inviaPost}>Invia al Server</button>

      {risultato && (
        <p className="success-msg">
          Nuovo post inserito! Ricevuto ID: {risultato.id} (Titolo:{" "}
          {risultato.title})
        </p>
      )}
    </div>
  );
}
