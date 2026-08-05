// Selezione elementi DOM
const inputNome = document.getElementById("inputNome");
const inputGioco = document.getElementById("inputGioco");
const inputPiattaforma = document.getElementById("inputPiattaforma");
const btnSalva = document.getElementById("btnSalva");
const btnCancella = document.getElementById("btnCancella");
const profiloContainer = document.getElementById("profiloContainer");
const outputNome = document.getElementById("outputNome");
const outputGioco = document.getElementById("outputGioco");
const outputPiattaforma = document.getElementById("outputPiattaforma");

// Elementi DOM (Tema)
const temaButton = document.getElementById("temaButton");
const body = document.body;


// Local storage - Tema

const temaSalvato = localStorage.getItem("tema");

if (temaSalvato === "dark") {
    body.classList.add("dark");
}

temaButton.addEventListener("click", function () {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }

});

// Aggiornamento Profilo Giocatore

function aggiornaInterfaccia() {
    const nomeSalvato = localStorage.getItem("nome");
    const giocoSalvato = localStorage.getItem("gioco");
    const piattaformaSalvata = localStorage.getItem("piattaforma");

    if (nomeSalvato && giocoSalvato && piattaformaSalvata) {
        outputNome.innerText = "Nome: " + nomeSalvato;
        outputGioco.innerText = "Gioco Preferito: " + giocoSalvato;
        outputPiattaforma.innerText = "Piattaforma: " + piattaformaSalvata;
        profiloContainer.classList.remove("nascosto");
    } else {
        profiloContainer.classList.add("nascosto");
    }
}

// Salvataggio e Cancellazione Dati

btnSalva.addEventListener("click", function() {
    localStorage.setItem("nome", inputNome.value);
    localStorage.setItem("gioco", inputGioco.value);
    localStorage.setItem("piattaforma", inputPiattaforma.value);
    aggiornaInterfaccia();
});

// Evento Cancella
btnCancella.addEventListener("click", function() {
    localStorage.removeItem("nome");
    localStorage.removeItem("gioco");
    localStorage.removeItem("piattaforma");
    
    inputNome.value = "";
    inputGioco.value = "";
    aggiornaInterfaccia();
});

// Avvio iniziale
aggiornaInterfaccia();