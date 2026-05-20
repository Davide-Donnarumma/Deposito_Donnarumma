let btnCarica = document.getElementById("btnCarica");
let outputArea = document.getElementById("outputArea");

//CREAZIONE DELLA PROMISE
//questa funzione restituisce una Promise di 2 secondi
function simulaRichiestaServer() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            //simula dei dati per la funzione
            let datiUtente = {
                nome: "Davide Donnarumma",
                ruolo: "Sviluppatore",
                stato: "Attivo"
            };
            resolve(datiUtente);
        }, 2000); //attesa di 2000 millisecondi (2 secondi)
    });
}

//GESTIONE DELL'EVENTO ASINCRONO
//la parola 'async' dichiara che questa funzione contiene delle operazioni in attesa
async function caricaDatiUtente() {
    outputArea.textContent = "Caricamento in corso...";
    outputArea.classList.remove("success"); 
    outputArea.classList.add("loading");
    
    try {
        let risultato = await simulaRichiestaServer();
        //dati ottenuti
        outputArea.textContent = "Nome: " + risultato.nome + " | Ruolo: " + risultato.ruolo + " | Stato: " + risultato.stato;
        outputArea.classList.remove("loading");
        outputArea.classList.add("success");

   } catch (errore) {
        outputArea.textContent = "Errore nel caricamento dei dati.";
        outputArea.classList.remove("loading");
    }
}

btnCarica.addEventListener("click", function() {
    // Richiamo della funzione esterna
    caricaDatiUtente();
});