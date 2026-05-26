// Importa i moduli necessari

const http = require("http");

const fs = require("fs");


// Crea il server

const server = http.createServer((req, res) => {


    // Legge il file HTML

    fs.readFile("Index.html", (errore, dati) => {


        // Controlla eventuali errori

        if (errore) {

            res.writeHead(500, { "Content-Type": "text/plain" });

            res.end("Errore nel caricamento del file");

            return;

        }


        // Invia il file HTML al browser

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(dati);

    });

});


// Avvia il server

server.listen(3000, () => {

    console.log("Server avviato su http://localhost:3000");

});