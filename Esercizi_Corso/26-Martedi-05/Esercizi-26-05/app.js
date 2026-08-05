//Scopo gestire l'interfaccia utente (chiedere e mostrare dati)

//Import moduli personalizati usiamo (./) per dire a Node che il file si trova in questa stessa cartella
const GestioneTesto = require("./GestioneTesto");

//import modulo per input console
const readline = require("readline");   // Serve per leggere ciò che l'utente digita nel terminale.

//creazione interfaccia input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Richieste

//rl.question stampa una domanda e "mette in pausa" il programma 
//in attesa che l'utente prema Invio
rl.question("Inserisca una frase: ", function(fraseInserita) {
    rl.question("Inserisca una lettera da cercare: ", function(letteraInserita) {
        
        console.log("\n RISULTATI DELL'ANALISI ");

        console.log("Testo originale:", fraseInserita);

        let testoMaiuscolo = GestioneTesto.inMaiuscolo(fraseInserita);
        console.log("Testo in maiuscolo:", testoMaiuscolo);

        let numeroCaratteri = GestioneTesto.contaCaratteri(fraseInserita);
        console.log("Numero di caratteri:", numeroCaratteri);

        let presenzaLettera = GestioneTesto.contieneLettera(fraseInserita, letteraInserita);
        if (presenzaLettera) {
            console.log(`La lettera '${letteraInserita}' è presente nel testo? Sì`);
        } else {
            console.log(`La lettera '${letteraInserita}' è presente nel testo? No`);
        }
        
        //Una volta finito tutto, dobbiamo dire a Node.js di chiudere il canale di ascolto,
        //altrimenti il terminale rimane bloccato all'infinito.
        rl.close();
    });
});