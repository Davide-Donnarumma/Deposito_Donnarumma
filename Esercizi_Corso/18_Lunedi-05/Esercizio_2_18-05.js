const prompt = require("prompt-sync")();

// INIZIALIZZAZIONE
// Dichiarazione delle variabili. Si predispongono tre spazi in memoria,
// inizialmente vuoti (stringhe vuote), per ospitare i tre ruoli che verranno digitati.
let Grado1 = "";
let Grado2 = "";
let Grado3 = "";

// ACQUISIZIONE DATI
// Il programma richiede l'inserimento dei dati all'utente.
// L'esecuzione si mette in pausa ad ogni riga, in attesa che venga premuto "Invio",
// dopodiché il testo digitato viene salvato nella rispettiva variabile.
Grado1 = prompt("Inserisci primo Grado: ");
Grado2 = prompt("Inserisci secondo Grado: ");
Grado3 = prompt("Inserisci terzo Grado: ");

// ANALISI DEL PRIMO INSERIMENTO
// Il costrutto switch valuta il contenuto testuale esatto della variabile "Grado1".
switch(Grado1){

    case "player":
        // Se la variabile contiene "player", viene stampato questo messaggio.
        console.log("Player: in gioco");
        break; // L'istruzione 'break' interrompe il controllo per evitare l'esecuzione dei casi successivi.

    case "moderator":
        console.log("Moderator: in visuale");
        break;

    case "admin":
        console.log("Admin: controlla il gioco");
        break;

    default:
        // Il caso 'default' interviene se il testo inserito non corrisponde 
        // a nessuno dei casi precedentemente elencati (es. errori di battitura o campi vuoti).
        console.log("Grado non valido")
}

switch(Grado2){

    case "player":
        console.log("Player: in gioco");
        break;

    case "moderator":
        console.log("Moderator: in visuale");
        break;

    case "admin":
        console.log("Admin: controlla il gioco");
        break;

    default:
        console.log("Grado non valido")
}

switch(Grado3){

    case "player":
        console.log("Player: in gioco");
        break;

    case "moderator":
        console.log("Moderator: in visuale");
        break;

    case "admin":
        console.log("Admin: controlla il gioco");
        break;

    default:
        console.log("Grado non valido")
}
