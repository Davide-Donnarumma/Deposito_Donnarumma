const prompt = require("prompt-sync")();
// Questa array memorizza i risultati che verranno generati durante l'esecuzione
let storicoRisultati = [];

// Ciclo infinito: continua a ripetere finché non incontra un comando di interruzione (in questo caso 'stop')
while (true) {  //Il ciclo while esegue il codice contenuto nel suo blocco finché la condizione espressa tra parentesi tonde risulta vera
    console.log("1. (+) | 2. (-) | 3. (*)| 4. (/) ");

    //Mostra un messaggio sul terminale e memorizza la stringa digitata dall'utente all'interno della variabile locale scelta
    let scelta = prompt("Seleziona un'operazione (o scrivi 'stop' per uscire): ");

    //Verifica se l'input inserito dall'utente corrisponde alla stringa di comando "stop"
    if (scelta === "stop") {
        break; // Interrompe l'esecuzione del ciclo while, uscendo dal loop
    }

    //Variabili: Acquisizione dei dati 'parseFloat' analizza il testo e lo trasforma in un numero decimale o intero
    let num1 = parseFloat(prompt("Inserisci il primo numero: ")); // primo numero per l'operazione 
    let num2 = parseFloat(prompt("Inserisci il secondo numero: ")); // secondo numero per l'operazione
    let risultato;

    // Lo switch calcola direttamente il valore senza chiamare funzioni esterne
    switch (scelta) {
        case "1":
            risultato = num1 + num2;
            break;
        case "2":
            risultato = num1 - num2;
            break;
        case "3":
            risultato = num1 * num2;
            break;
        case "4":
            risultato = num1 / num2;
            break;
        default: // Caso di default: si attiva se l'input dell'utente non corrisponde a nessuno dei "case" precedenti (1, 2, 3 o 4)
            console.log("Scelta non valida.");
            continue; 
    }

    // Se il calcolo è valido, mostra il risultato e lo inserisce nell'array
    console.log("Il risultato è:", risultato);
    storicoRisultati.push(risultato); // push aggiunge l'elemento alla fine dell'array
}

// Output finale della cronologia
console.log("Storico dei risultati:", storicoRisultati);

