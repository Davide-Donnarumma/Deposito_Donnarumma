let btnHamburger = document.getElementById("btnHamburger");
let menuNavigazione = document.getElementById("menuNavigazione");
let formAdozione = document.getElementById("formAdozione");
let areaMessaggio = document.getElementById("areaMessaggio");
let bottoniAdozione = document.querySelectorAll(".btn-adozione");
let btnEsplora = document.getElementById("btnEsplora");

if (btnHamburger && menuNavigazione) {
    btnHamburger.addEventListener("click", function() {
        menuNavigazione.classList.toggle("mostraMenu");
    });
}

//Bottoni richiedi info nelle card
bottoniAdozione.forEach(btn => {
    btn.addEventListener("click", function() {
        let cane = this.dataset.nome;
        alert("Hai scelto di conoscere meglio " + cane + ". Ti stiamo portando al modulo di richiesta.");
        window.location.href = "Info.html";
    });
});

//Logo interattivo Home
if (btnEsplora) {
    btnEsplora.addEventListener("click", function() {
        //Questo rendeiriza alla pagina delle card dei cani
        window.location.href = "I nostri cani.html";
    });
}
//Form 
if (formAdozione) {
    formAdozione.addEventListener("submit", function(event) {
        event.preventDefault();
        
        areaMessaggio.innerText = "Grazie! La tua richiesta è stata inviata. Ti contatteremo presto.";
        areaMessaggio.className = "messaggio-successo";
        
        formAdozione.reset();
    });
}