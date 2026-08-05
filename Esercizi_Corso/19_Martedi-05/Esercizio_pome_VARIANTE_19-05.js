// *VARIANTE CORRETTA DEL ESERCIZIO FATTA IN UN SECONDO MOMENTO

const prompt = require("prompt-sync")();

let catalogo = [];

console.log("INSERIRE PRODOTTI NEL CATALOGO");

//Avvia un ciclo continuo per l'inserimento di prodotti 
while (true){
    let nomeInput = prompt("Inserisci il nome del prodotto (oppure scrivi 'stop' per procedere ai calcoli): ");
    
    // Condizione di uscita
    if (nomeInput === "stop") {
        break; 
    }

    let prezzoInput = parseFloat(prompt("Inserisci il prezzo: "));
    let quantitaInput = parseFloat(prompt("Inserisci la quantita in magazzino: "));
    let nuovoProdotto = {
        nome: nomeInput,
        prezzo: prezzoInput,
        quantita: quantitaInput
    };

catalogo.push(nuovoProdotto);
    console.log("Prodotto aggiunto con successo");
}


// //function aggiungiProdotto() {

//     let nome = prompt("Nome prodotto: ");

//     let prezzo = Number(prompt("Prezzo prodotto: "));

//     let quantita = Number(prompt("Quantita prodotto: "));



//     // Controllo dati
//     if (
//   ?      nome.trim() === "" ||
//   ?      isNaN(prezzo) ||
//   ?      isNaN(quantita)
//     ) {

//         console.log("Dati non validi");

//         return;
//     }



//     // Creo oggetto prodotto
//     let prodotto = {

//         nome: nome,
//         prezzo: prezzo,
//         quantita: quantita

//     };



//     // Inserisco nel catalogo
//     catalogo.push(prodotto);

//     console.log("Prodotto aggiunto");
// }

//Funzioni

//Funzione per calcolare il valore di tutti i prodotti nel magazzino
function calcolaValoreTotale(inventario){
    let totale = 0;
    //ciclo
    for(let prodotto of inventario){
        totale = totale + (prodotto.prezzo * prodotto.quantita);
    }
    return totale;
}

//funzione per trovare il prodotto con il prezzo piu alto
function trovaProdottoPiuCostoso(inventario){
    let prodottoMax = inventario[0];
    for (let prodotto of inventario) {
        if (prodotto.prezzo > prodottoMax.prezzo) {
            prodottoMax = prodotto;
        }
    }
    return prodottoMax;
}

//Funzione per filtrare i prodotti con quantita maggiore di 0
function filtraProdottiDisponibili(inventario) {
    return inventario.filter(prodotto => prodotto.quantita > 0);
}

// Funzione per aggiungere dinamicamente la proprieta "disponibile"
function aggiornaDisponibilita(inventario) {
    for (let prodotto of inventario) {
        prodotto.disponibile = (prodotto.quantita > 0);
    }
}

// Funzione per estrarre esclusivamente i nomi dei prodotti dal catalogo
function ottieniNomiProdotti(inventario) {
    return inventario.map(prodotto => prodotto.nome);
}


//Stampa

if (catalogo.length > 0){
    let listaNomi = ottieniNomiProdotti(catalogo);
    aggiornaDisponibilita(catalogo);
    let prodottoDisponibili = filtraProdottiDisponibili(catalogo);
    let articoloPiuCostoso = trovaProdottoPiuCostoso(catalogo);


console.log("Catalogo Prodotti Iniziale");
console.log(catalogo);
console.log("Valore totale del magazzino: $", calcolaValoreTotale(catalogo));
console.log("Il prodotto più costoso e: ", articoloPiuCostoso.nome, "($", articoloPiuCostoso.prezzo, ")");
console.log("Prodotti attualmente disponibili in magazzino: ");
console.log(prodottoDisponibili);
console.log("Catalogo aggiornato con la nuova proprieta:");
console.log(catalogo);
console.log("Elenco dei soli nomi dei prodotti:");
console.log(listaNomi);
} else{
console.log("Nessun prodotto inserito.");// TODO: Aggiungere il controllo "not null" per verificare che i dati inseriti non siano vuoti o nulli.
}