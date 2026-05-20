// Selezione elementi

let input = document.getElementById("nome");

let bottone = document.getElementById("btn");

let output = document.getElementById("output");


// Aggiunta event listener

bottone.addEventListener("click", function() {

    let nome = input.value; // input utente

    

    if (nome === "") {

        output.textContent = "Inserisci un nome";

    } else {

        output.textContent = "Ciao " + nome;

    }

});