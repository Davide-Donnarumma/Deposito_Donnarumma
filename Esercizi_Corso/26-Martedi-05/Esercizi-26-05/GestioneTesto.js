//Scopo contenere le funzioni logiche per manipolare i testi.
//questo file non stampa nulla a schermo, "calcola" e basta.

//Funzioni:
//Funzione che trasforma un testo in maiuscolo
function inMaiuscolo(testo) {
    return testo.toUpperCase();
}

//Funzione che conta il numero di caratteri
function contaCaratteri(testo) {
    return testo.length;
}

//Funzione che verifica se una specifica lettera è presente in una frase
function contieneLettera(testo, lettera) {
    return testo.includes(lettera);
}

//Esportazione di tutte le funzioni tramite module.exports
/*Tutto ciò che inseriamo qui dentro diventa pubblico e può essere 
importato (tramite require) in altri file del nostro progetto.*/
module.exports = {
    inMaiuscolo,
    contaCaratteri,
    contieneLettera
};