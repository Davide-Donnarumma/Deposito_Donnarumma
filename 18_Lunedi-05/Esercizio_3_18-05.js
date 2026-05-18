const prompt = require("prompt-sync")();

let inputUtente = prompt("Inserisca un numero intero positivo N: ");

let N = Number(inputUtente);


//questo if controlla se N e maggiore di 0 
if (N > 0) {
    //variabili pari e dispari
    let totalepari = 0;
    let totaledispari = 0;
    //    
    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            totalepari++;
        }else {
            totaledispari++;
        }
    }

    console.log("Totale numeri pari: " + totalepari);
    console.log("Totale numeri dispari: " + totaledispari);
}else {
    console.log("Errore: inserimento non valido");
}