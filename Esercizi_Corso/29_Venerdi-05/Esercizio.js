// //! Funzione con Callback
function invertiStringaAsincrona(testo, callback) {
    setTimeout(() => {
        // Converte in maiuscolo
        let testoModificato = testo.toUpperCase();
        callback(testoModificato);
    }, 1500);
}

invertiStringaAsincrona("ciao mondo", (risultato) => {
    console.log(risultato);
});
//!Fine Callback



//!Funzione con promise
function invertiStringaAsincrona(testo) {
    return new Promise((resolve, reject) => {
        if (testo === "") {
            reject("Errore: La stringa fornita è vuota");
            return;
        }

        setTimeout(() => {
            let testoModificato = testo.toUpperCase();
            resolve(testoModificato);

        }, 1500);
    });
}

console.log("Inizio Promise");

//Prova resolve
invertiStringaAsincrona("programmazione")
    .then((risultato) => {

        console.log("Operazione riuscita:", risultato);
    })
    .catch((errore) => {
        console.log("Si è verificato un errore:", errore);
    });

//Prova reject
invertiStringaAsincrona("")
    .then((risultato) => {
        console.log("Operazione riuscita:", risultato);
    })
    .catch((errore) => {
        console.log("Si è verificato un errore:", errore);
    });

//! Fine promise 



//! then e catch
function invertiStringaAsincrona(testo) {
    return new Promise((resolve, reject) => {
        if (testo === "") {
            reject("Errore: Stringa vuota non ammessa");
            return;
        }
        setTimeout(() => {
            let risultato = testo.toUpperCase();
            resolve(risultato);
        }, 1500);
    });
}

console.log("then/catch");

invertiStringaAsincrona("javascript")
    .then((risultato) => {
        console.log("Operazione riuscita:", risultato);
    })
    .catch((errore) => {
        console.log("Si è verificato un errore:", errore);
    });
//! Fine then e catch


//! Async e await
async function eseguiConAwait() {
    console.log("async/await");
    try {
        let risultato = await invertiStringaAsincrona("dsk");
        console.log("Operazione riuscita:", risultato);
        
    } catch (errore) {
        console.log("Si è verificato un errore:", errore);
    }
}
eseguiConAwait();

async function eseguiTestErrore() {
    try {
        let risultatoErrore = await invertiStringaAsincrona("");
        console.log(risultatoErrore);
    } catch (errore) {
        console.log("Si è verificato un errore:", errore);
    }
}
eseguiTestErrore();