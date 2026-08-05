// Seleziono gli elementi tramite id

let titolo = document.getElementById("titolo");


let testo = document.getElementById("testo");


let bottone = document.getElementById("bottone");


let lista = document.getElementById("lista");




// Cambio il titolo appena la pagina parte

titolo.innerHTML = "Titolo modificato con JS";




// Quando clicco il bottone

bottone.addEventListener("click", function () {


    // Cambio il testo del paragrafo

    testo.innerHTML = "Testo modificato ";





    // Creo un nuovo elemento li

    let nuovoElemento = document.createElement("li");




    // Inserisco testo nel nuovo elemento

    nuovoElemento.innerHTML = "Nuovo elemento ";




    // Aggiungo l'elemento alla lista

    lista.appendChild(nuovoElemento);


});