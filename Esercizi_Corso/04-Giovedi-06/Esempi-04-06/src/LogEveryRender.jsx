LogEveryRender.jsx
import { useEffect, useState } from 'react';

export function LogEveryRender() {
const [text, setText] = useState("");

// Nessun array di dipendenze fornito come secondo parametro
useEffect(() => {
console.log("Il componente si è ridisegnato. Testo corrente: " + text);
}); // <-- Manca la parentesi quadra

return (
<input
value={text}
onChange={e => setText(e.target.value)}
placeholder="Digita qualcosa..."
/>
);
}