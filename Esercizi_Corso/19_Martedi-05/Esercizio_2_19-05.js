const prompt = require("prompt-sync")();
let listaParole = [];

//Funzione per verificare se una parola è valida (non stringa vuota)
function verificaParolaValida(parola) {
    return parola !== "";
}

//Funzione per contare quante parole sono state inserite
function contaParole(array) {
    return array.length; //length riporta la lunghezza calcolando matematicamente la dimensione dell'arra
}

//Funzione per trovare la parola più lunga
function trovaParolaPiuLunga(array) {
    let max = array[0];
    //Il ciclo for-of semplifica l'iterazione restituendo direttamente i valori contenuti nella struttura
    for (let parola of array) {
        if (parola.length > max.length) {
            max = parola;
        }
    }
    return max;
}

//Funzione per trovare la parola più corta
function trovaParolaPiuCorta(array) {
    let min = array[0];
    for (let parola of array) {
        if (parola.length < min.length) {
            min = parola;
        }
    }
    return min;
}

//Funzione per contare quante parole iniziano con una vocale
function contaVocaliIniziali(array) {
    let conteggio = 0;
    let vocali = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let parola of array) {
        if (vocali.includes(parola[0])) {
            conteggio++;
        }
    }
    return conteggio;
}

//Funzione per trasformare tutte le parole in maiuscolo
function trasformaInMaiuscolo(array) {
    // Prende la lista (array), scorre le parole una ad una (map),
    // trasforma ogni parola in MAIUSCOLO (toUpperCase) e restituisce la nuova lista.
    return array.map(parola => parola.toUpperCase());
}

//ESECUZIONE DEL PROGRAMMA

while (true) {
    let input = prompt("Inserisci una parola (scrivi 'fine' per terminare): ");

    //L'inserimento termina esattamente quando l'utente scrive "fine"
    if (input === "fine") {
        break;
    }

    //Se la parola è valida, viene salvata nell'array
    if (verificaParolaValida(input)) {
        listaParole.push(input);
    }
}

//STAMPA

console.log("Array originale:", listaParole);
console.log("Numero totale di parole:", contaParole(listaParole));
console.log("Parola più lunga:", trovaParolaPiuLunga(listaParole));
console.log("Parola più corta:", trovaParolaPiuCorta(listaParole));
console.log("Parole che iniziano con vocale:", contaVocaliIniziali(listaParole));
console.log("Nuovo array in maiuscolo:", trasformaInMaiuscolo(listaParole));