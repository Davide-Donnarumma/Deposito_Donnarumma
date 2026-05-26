// const fs = require("fs");

// // Creiamo la funzione che accetta come parametro il tipo di file da leggere
// function mostraMessaggio(tipoDocumento) {
//     let nomeFile = "";

//     // Decidiamo quale file leggere in base alla chiamata
//     if (tipoDocumento === "testo") {
//         nomeFile = "messaggio.txt";
//     } else if (tipoDocumento === "html") {
//         nomeFile = "pagina.html";
//     } else {
//         console.log("Errore: Tipo di documento non riconosciuto.");
//         return; // Interrompiamo l'esecuzione
//     }

//     // Utilizziamo il metodo readFile per leggere il file. 
//     // "utf-8" serve per decodificare il testo in modo leggibile.
//     fs.readFile(nomeFile, "utf-8", (errore, dati) => {
//         if (errore) {
//             console.log("Si è verificato un errore durante la lettura del file:", errore);
//         } else {
//             console.log(` Inizio lettura di: ${nomeFile} `);
//             console.log(dati); // Stampiamo il contenuto nel terminale
//             console.log(` Fine lettura `);
//         }
//     });
// }

// // Esportiamo la funzione per renderla utilizzabile in altri file
// module.exports = {
//     mostraMessaggio
// };