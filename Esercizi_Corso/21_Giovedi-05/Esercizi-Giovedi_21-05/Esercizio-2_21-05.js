//recupero dei nodi html tramite id per poterli manipolare
const btnMenu = document.getElementById("btnMenu");
const menuNav = document.getElementById("menuNav");
const formLibro = document.getElementById("formLibro");
const contenitoreLibri = document.getElementById("contenitoreLibri");
// da finire menu, gestione form agg libro, ecc...

//menu responsive
btnMenu.addEventListener("click", function() {
    menuNav.classList.toggle("active");
});

//Form add libro
formLibro.addEventListener("submit", function(event) {
    event.preventDefault();

    let titolo = document.getElementById("titolo").value;
    let autore = document.getElementById("autore").value;
    let genere = document.getElementById("genere").value;
    let anno = document.getElementById("anno").value;
    let descrizione = document.getElementById("descrizione").value;

    //crea card dinamica
    let nuovaCard = document.createElement("article");
    nuovaCard.classList.add("card-libro");

    //innerHTML per definire le card 
    nuovaCard.innerHTML = `
        <h2>${titolo}</h2>
        <p><strong>Autore:</strong> ${autore}</p>
        <p><strong>Genere:</strong> ${genere}</p>
        <p><strong>Anno:</strong> ${anno}</p>
        <p><strong>Trama:</strong> ${descrizione}</p>
    `;

    contenitoreLibri.appendChild(nuovaCard);
    formLibro.reset();
});
