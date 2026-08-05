//funzione dichiarativa definita con la parola chiave Function 

function sottrazione(a, b){
    return a - b;
}

let risultato = sottrazione(10, 5);
console.log(risultato); // 5

const moltiplica = function(a, b) {
    return a * b;
}

console.log(moltiplica(4, 2)); //8

//---------------------------

//arrow function

const sottrai = (a, b) => a - b;

console.log(sottrai(10, 3)); //7


//parametri e return

function saluta(nome){
    return "Ciao" + nome;
}

let messaggio = saluta(" DSK");
console.log(messaggio); //ciao DSK