const http = require("http");
const fs = require("fs");
const prompt = require("prompt-sync")();

console.log(" SCEGLI LA PAGINA DA AVVIARE ");
console.log("a - Home\nb - Profilo Creatore\nc - Calcolatrice");

//Mappa delle scelte iniziali dell'utente
const pagineIniziali = {
    a: "home.html",
    b: "profilo.html",
    c: "calcolatrice.html"
};

let scelta = prompt("Scelta: ");
let paginaScelta = pagineIniziali[scelta];

if (!paginaScelta) {
    console.log("Scelta non valida!");
    process.exit();
}

//Tabella di corrispondenza tra URL richiesto, file e tipo di contenuto
const mappaRisorse = {
    "/": { file: paginaScelta, tipo: "text/html; charset=utf-8" },
    "/style.css": { file: "style.css", tipo: "text/css" },
    "/script.js": { file: "script.js", tipo: "text/javascript" },
    "/img/avatar_davide_donnarumma.png": { file: "img/avatar_davide_donnarumma.png", tipo: "image/png" }
};

//Creazione del server
http.createServer((req, res) => {
    
    //URL richiesto direttamente nella nostra mappa delle risorse
    const risorsa = mappaRisorse[req.url];
    if (risorsa) {
        fs.readFile(risorsa.file, (err, data) => {
            res.writeHead(200, { "Content-Type": risorsa.tipo });
            res.end(data);
        });
    } else {
        //URL strano, restituiamo un errore standard
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Risorsa non trovata");
    }

}).listen(3000, () => {
    console.log(`\nServer avviato con la pagina: ${paginaScelta}`);
    console.log("Apri il browser su: http://localhost:3000");
});