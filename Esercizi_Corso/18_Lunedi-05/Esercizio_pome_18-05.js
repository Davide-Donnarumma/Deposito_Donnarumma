const prompt = require("prompt-sync")();

let arrayNumeri = [];
let inputUtente = "";

console.log("Inserisca i numeri uno alla volta: (Digita '0' per terminare l'inserimento).");

while (true) {
    inputUtente = prompt("Inserisca un valore: ");
    if (inputUtente === "0") {
        break;
    }
    arrayNumeri.push(inputUtente);
    
}

// Array con vari valori
let dati = [10, 20, "ciao", 40];


// Controllo tutti gli elementi
for (let i = 0; i < dati.length; i++) {

// Se il valore non è numerico
if (isNaN(dati[i])) {

console.log(dati[i] + " NON è un numero");

} else {

console.log(dati[i] + " è un numero");

}

}

console.log ("Aquisizione terminata contenuto dell'arrey:");
console.log (arreyNumeri);

