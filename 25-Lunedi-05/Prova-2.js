const temaButton = document.getElementById("temaButton");

const carrelloButton = document.getElementById("carrelloButton");

const resetButton = document.getElementById("resetButton");


const temaTesto = document.getElementById("temaTesto");

const carrelloTesto = document.getElementById("carrelloTesto");


const body = document.body;


// ---------------------

// LOCAL STORAGE - Tema

// ---------------------


const temaSalvato = localStorage.getItem("tema");


if (temaSalvato === "dark") {

    body.classList.add("dark");

}


temaButton.addEventListener("click", function () {


    body.classList.toggle("dark");


    if (body.classList.contains("dark")) {

        localStorage.setItem("tema", "dark");

    } else {

        localStorage.setItem("tema", "light");

    }


    aggiornaTesti();

});


// ---------------------

// SESSION STORAGE - Carrello

// ---------------------


let carrello = sessionStorage.getItem("carrello");


if (carrello === null) {

    carrello = 0;

} else {

    carrello = Number(carrello);

}


carrelloButton.addEventListener("click", function () {


    carrello++;


    sessionStorage.setItem("carrello", carrello);


    aggiornaTesti();

});


resetButton.addEventListener("click", function () {


    sessionStorage.removeItem("carrello");


    carrello = 0;


    aggiornaTesti();

});


// ---------------------

// Aggiornamento testi

// ---------------------


function aggiornaTesti() {


    temaTesto.innerText =

        "Tema salvato: " + localStorage.getItem("tema");


    carrelloTesto.innerText =

        "Prodotti nel carrello: " + carrello;

}


aggiornaTesti();