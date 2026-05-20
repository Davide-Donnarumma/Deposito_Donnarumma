// Seleziono elementi HTML

let box = document.getElementById("box");


let btnBordo = document.getElementById("btnBordo");


let btnRotazione =
document.getElementById("btnRotazione");


let btnNascondi =
document.getElementById("btnNascondi");



btnBordo.addEventListener("click", function () {


    // Cambio spessore e colore bordo

    box.style.border = "5px dashed red";


});




btnRotazione.addEventListener("click", function () {


    // Ruoto il box

    box.style.transform = "rotate(20deg)";


});




btnNascondi.addEventListener("click", function () {


    // Nascondo il box

    box.style.visibility = "hidden";


});