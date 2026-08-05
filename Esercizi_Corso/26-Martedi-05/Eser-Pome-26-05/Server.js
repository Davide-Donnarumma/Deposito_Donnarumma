const http = require("http");

const gestore = require("./Gestore");

const server = http.createServer((req, res) => {
    gestore.inviaPagina(res);
});

// // Importiamo il nostro modulo personalizzato tramite require()
// const ModuloMessaggio = require("./GestioneMessaggio");
// console.log("Avvio del programma Node.js in corso...\n");

// // Chiamiamo la funzione per leggere il file .txt
// ModuloMessaggio.mostraMessaggio("testo");

// // Chiamiamo la funzione per leggere il file .html
// ModuloMessaggio.mostraMessaggio("html");

server.listen(3000, () => {
    console.log("Server avviato Vai su: http://localhost:3000");
});