// let numeri = [1, 2, 3];

// //accesso agli elementi
// console.log(numeri[0]); //1

// //aggiunta elementi 
// numeri.push(4);  //aggiunta in fondo -> [1, 2, 3, 4]
// numeri.unshift(0);  //aggiunta all'inizio -> [0, 1, 2, 3, 4]

// // Rimozione elementi

// numeri.pop();          // rimuove ultimo -> [0,1,2,3]

// numeri.shift();        // rimuove primo -> [1,2,3]

// // Trasformazione

// let doppi = numeri.map(n => n * 2); // [2,4,6]  // (=> e uguale a in)


// // Filtro

// let maggioriDiUno = numeri.filter(n => n > 1); // [2,3]


// // Ricerca

// let trovato = numeri.find(n => n === 2); // 2


// // Lunghezza

// console.log(numeri.length); // 3


let numeri = ["Ciao" ,20, 30];

for (let valore of numeri) {
    console.log(valore); // 10 ,20, 30
    console.log(numeri);
}

let persona = { nome: "Mario", eta: 30 };


for (let chiave in persona) {

    console.log(chiave, persona[chiave]);
}