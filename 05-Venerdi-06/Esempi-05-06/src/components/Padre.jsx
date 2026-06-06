import { useState } from "react";
import { Figlio } from "./Figlio";

export function Padre() {
  const [username, setUsername] = useState("marco");

  function gestisciUpdateNome(nomeRicevuto) {
    setUsername(nomeRicevuto);
  }

  return (
    <div>
      <p>Sono il padre</p>
      <Figlio username={username} onUpdateNome={gestisciUpdateNome} />
    </div>
  );
}
