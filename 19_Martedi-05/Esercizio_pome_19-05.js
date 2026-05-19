// * ESERCIZIO SVOLTO PER PRIMO (non avevo capito bene la traccia)

const prompt = require("prompt-sync")();

let catalogo = [
    {
    nome: "Tastiera",
    prezzo: 279.99,
    quantita: 2,
},
{
    nome: "Mouse",
    prezzo: 179.99,
    quantita: 5
},
{
    nome: "Monitor",
    prezzo: 879.99,
    quantita: 2
},
{
    nome: "Tappetino" //caso limite dove manca prezzo e quantita
}
];

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

// Funzione per aggiungere dinamicamente la proprietà "disponibile"
function aggiornaDisponibilita(inventario) {
    for (let prodotto of inventario) {
        prodotto.disponibile = (prodotto.quantita > 0);
    }
}

// Funzione per estrarre esclusivamente i nomi dei prodotti dal catalogo
function ottieniNomiProdotti(inventario) {
    return inventario.map(prodotto => prodotto.nome);
}

let listaNomi = ottieniNomiProdotti(catalogo);
aggiornaDisponibilita(catalogo);
let prodottoDisponibili = filtraProdottiDisponibili(catalogo);
let articoloPiuCostoso = trovaProdottoPiuCostoso(catalogo);

//Stampa
console.log("Catalogo Prodotti Iniziale");
console.log(catalogo);
console.log("Valore totale del magazzino: $", calcolaValoreTotale(catalogo));
console.log("Il prodotto più costoso è: ", articoloPiuCostoso.nome, "(€", articoloPiuCostoso.prezzo, ")");
console.log("Prodotti attualmente disponibili in magazzino: ");
console.log(prodottoDisponibili);
console.log("Catalogo aggiornato con la nuova proprietà:");
console.log(catalogo);
console.log("Elenco dei soli nomi dei prodotti:");
console.log(listaNomi);