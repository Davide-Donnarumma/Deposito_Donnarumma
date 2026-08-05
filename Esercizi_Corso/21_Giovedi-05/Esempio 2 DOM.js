// Selezione elementi

const titolo = document.getElementById("titolo");
const contenitore = document.getElementById("contenitore");
const bottone = document.getElementById("bottone");

// Evento click
bottone.addEventListener("click", function () {

    // Modifica del testo del titolo
    titolo.innerText = "Contenuto aggiornato";

    // Inserimento dinamico di HTML
    contenitore.innerHTML = `
        <h2>Nuova sezione</h2>
        <p>
            Questo contenuto è stato generato dinamicamente con JavaScript.
        </p>
    `;

});