const prompt = require("prompt-sync")();

// Variabili per il menu
let menu = "";
let extra1 = "";
let extra2 = "";

//impostazioni prompt per il menu che visualizzera l'utente
menu = prompt("Scegli un piatto: panino, hamburger o pizza: ");

// Switch principale che va a impostare il menu per varie scelte 
switch(menu) {

    case "panino":

        console.log("Hai selezionato panino.");
        extra1 = prompt("Aggiungi un condimento: ");
        extra2 = prompt("Aggiungi un altro condimento: ");
        console.log("Ordine finale:");
        console.log("panino con " + extra1 + " e " + extra2);

        break;

    case "hamburger":

        console.log("Hai selezionato hamburger.");
        extra1 = prompt("Aggiungi un condimento: ");
        extra2 = prompt("Aggiungi un altro condimento: ");
        console.log("Ordine finale:");
        console.log("hamburger con " + extra1 + " e " + extra2);

        break;

    case "pizza":

        console.log("Hai selezionato Pizza.");
        extra1 = prompt("Aggiungi un ingrediente: ");
        extra2 = prompt("Aggiungi un altro ingrediente: ");
        console.log("Ordine finale:");
        console.log("Pizza con " + extra1 + " e " + extra2);

        break;

    default:
        console.log("Scelta non valida.");
}
