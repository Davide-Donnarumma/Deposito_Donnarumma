// ciclo for si usa quando conosci ul numero di iterazioni
// for (let i = 0; i < 3; i++){
//     console.log(i); // 0, 1, 2
// }
// //Cicli - while esegue il blocco finché la condizione è vera.
// let i = 0;

// while (i < 3) {
//     console.log(i); // 0, 1, 2
//     i++;
// }

// let i = 0;

// //Cicli - do-while esegue almeno una volta il blocco, poi verifica.
// do {

//     console.log(i); // 0, 1, 2

//     i++;

// } while (i < 3);

//--------------------------------------------------------------------

// Esempio di while con uscita tramite input utente


// Modulo per input da console

const prompt = require("prompt-sync")();


// Variabile booleana

let attivo = true;


// Ciclo

while(attivo) {


    // Input utente

    let comando = prompt("Scrivi qualcosa (digita 'esci' per terminare): ");


    // Controllo

    if(comando === "esci") {


        console.log("Programma terminato.");

        attivo = false;


    } else {


        console.log("Hai scritto: " + comando);


    }

}