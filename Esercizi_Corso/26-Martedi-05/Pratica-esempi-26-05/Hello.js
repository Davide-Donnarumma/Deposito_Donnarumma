// Importa il modulo HTTP integrato di Node.js
const http = require("http");

// Crea il server
const server = http.createServer((req, res) => {

// Imposta il tipo di contenuto della risposta
res.writeHead(200, { "Content-Type": "text/plain" });

// Invia il testo al browser
res.end("Hello World da Node.js!");
});

// Avvia il server sulla porta 3000
server.listen(3000, () => {
console.log("Server avviato su http://localhost:3000");
});