// Selezione tramite ID

const titolo = document.getElementById("titolo");


// Selezione tramite classe CSS

const descrizione = document.querySelector(".descrizione");


// Selezione del bottone

const bottone = document.getElementById("bottone");


// Gestione evento click

bottone.addEventListener("click", function () {


    // Modifica del titolo

    titolo.innerText = "Titolo modificato con JavaScript";


    // Modifica del paragrafo

    descrizione.innerText = "Il contenuto è stato aggiornato dinamicamente.";

});