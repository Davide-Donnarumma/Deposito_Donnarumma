// Creazione oggetto

let persona = {

    nome: "Mario",

    eta: 30

};


// Accesso proprietà

console.log(persona.nome);      // Mario

console.log(persona["eta"]);    // 30


// Modifica proprietà

persona.eta = 31;


// Aggiunta proprietà

persona.citta = "Milano";


// Rimozione proprietà

delete persona.citta;



// Metodi utili

let chiavi = Object.keys(persona);     // ["nome", "eta"]

let valori = Object.values(persona);   // ["Mario", 31]

let entries = Object.entries(persona); // [["nome","Mario"],["eta",31]]