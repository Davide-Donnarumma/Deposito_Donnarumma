let bottone = document.getElementById("btn");
let output = document.getElementById("output");


// CALLBACK
function operazioneConCallback(callback) {
    setTimeout(function() {
        callback("Dati ricevuti tramite callback");
    }, 2000);
}


// PROMISE
function operazioneConPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Dati ricevuti tramite Promise");
        }, 2000);
    });
}


// ASYNC / AWAIT
async function caricaDati() {
    output.textContent = "Caricamento in corso...";
    try {
        let risultato = await operazioneConPromise();
        output.textContent = risultato;
    } catch (errore) {
        output.textContent = "Errore nel caricamento";
    }
}

bottone.addEventListener("click", function() {
    caricaDati();
});