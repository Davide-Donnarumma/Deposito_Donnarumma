// let valore = 10;        // number

// valore = "ciao";        // ora è string

// valore = true;          // ora è boolean


// let x;                  // undefined

// let y = null;           // null


// let id = Symbol("id");  // symbol

// let grande = 12345678901234567890n; // bigint

// const PI = 3.14;


// // PI = 3.1415; // Errore: riassegnazione non consentita


// const numeri = [1, 2];


// numeri.push(3); // consentito: modifica del contenuto

// let globale = "visibile ovunque";


// if (true) {

//     let locale = "solo nel blocco";

//     console.log(globale); // ok

//     console.log(locale);  // ok

// }

// // console.log(locale); // Errore

// // console.log(a); // Errore: non accessibile prima della dichiarazione

// let a = 10;


// // Con var (comportamento diverso)

// console.log(b); // undefined (non errore)

// var b = 20;

// let a = 10;

// let b = 5;


// // Operatori aritmetici

// let somma = a + b;        // 15

// let differenza = a - b;   // 5

// let prodotto = a * b;     // 50

// let divisione = a / b;    // 2


// Operatori di confronto

// let uguale = (a == "10");   // true (coercizione)

// let strettamenteUguale = (a === "10"); // false (tipo diverso)

// let maggiore = (a > b);     // true


// // Operatori logici

// let condizione = (a > 5 && b < 10); // true

// let alternativa = (a < 5 || b < 10); // true

// let negazione = !(a > b);           // false


// // Operatori di assegnazione

// let x = 10;

// x += 5; // x = x + 5 -> 15


// console.log(somma, uguale, strettamenteUguale, condizione);

const prompt = require("prompt-sync")();

let nome = prompt("Inserisci il tuo nome: ");

console.log("Ciao " + nome);