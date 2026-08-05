// DOM
const titoloZoo = document.getElementById("titoloZoo");
const listaAnimali = document.getElementById("listaAnimali");
const btnRimuovi = document.getElementById("btnRimuovi");
const btnTema = document.getElementById("btnTema");
const bottoniAggAnimale = document.querySelectorAll(".btn-AggAnimali");
const descrizioniAnimali = {
    "Leone": "Il re della savana, possente e fiero.",
    "Elefante": "Un gigante gentile, dotato di una memoria straordinaria.",
    "Giraffa": "L'animale terrestre più alto, dal collo inconfondibile.",
    "Pinguino": "Un uccello marino inetto al volo ma eccellente nuotatore.",
    "Scimmia": "Un primate intelligente e incredibilmente agile."
};

bottoniAggAnimale.forEach(function(bottone) {
    bottone.addEventListener("click", function() {
        
        let nomeAnimale = bottone.dataset.nome;
        let emojiAnimale = bottone.dataset.emoji;
        let descrizioneAnimale = descrizioniAnimali[nomeAnimale];
        let nuovoElemento = document.createElement("li");
        nuovoElemento.classList.add("card-animale");
        
        // Inserimento del testo con l'emoji e descrizione animale
        nuovoElemento.innerHTML = emojiAnimale + " <strong>" + nomeAnimale + "</strong>" + descrizioneAnimale;
        listaAnimali.appendChild(nuovoElemento);
    });
});

// Rimozione dell'ultimo elemento
btnRimuovi.addEventListener("click", function() {
    if (listaAnimali.lastElementChild) {
        listaAnimali.lastElementChild.remove();
    } else {
        alert("Nessun animale da rimuovere.");
    }
});

// Cambio Tema Notturno/Diurno
btnTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-notturno");
    
    if (document.body.classList.contains("tema-notturno")) {
        titoloZoo.textContent = "Il mio Zoo di notte 🌙";
    } else {
        titoloZoo.textContent = "Il mio Zoo ☀️";
    }
});