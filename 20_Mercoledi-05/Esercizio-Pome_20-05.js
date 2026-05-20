let titoloPrincipale = document.getElementById("titoloPrincipale");
let box = document.getElementById("box");
let campoInput = document.getElementById("campoInput");
let btnAggiungi = document.getElementById("btnAggiungi");
let btnElimina = document.getElementById("btnElimina");
let btnStile = document.getElementById("btnStile");
let btnRotazione = document.getElementById("btnRotazione");
let listaDinamica = document.getElementById("listaDinamica");


//Aggiunta elemento e modifica del testo del titolo
btnAggiungi.addEventListener("click", function() {
    let testoInserito = campoInput.value;

    if (testoInserito.trim() !== "") {
        let nuovoElemento = document.createElement("li");
        nuovoElemento.textContent = testoInserito;
        
        listaDinamica.appendChild(nuovoElemento);
        titoloPrincipale.textContent = "Nuovo elemento aggiunto";
        campoInput.value = "";
    }
});

//rotazione box che continua fino a che si clicca il btn Ruotabox
let continuaRotazione = 0;

btnRotazione.addEventListener("click", function () {
    continuaRotazione = continuaRotazione + 20;
    box.style.transform = "rotate(" + continuaRotazione + "deg)";
});

//Eliminazione dell'ultimo elemento della lista
btnElimina.addEventListener("click", function() {
    if (listaDinamica.lastElementChild) {
        listaDinamica.lastElementChild.remove();
        titoloPrincipale.textContent = "Ultimo elemento rimosso";
    }
});

//Modifica stili visivi
btnStile.addEventListener("click", function() {
    
    //colore del titolo
    titoloPrincipale.style.color = "#D35400";
    
    //BOX div
    box.style.backgroundColor = "#24b0b0";
    box.style.fontSize = "22px";
    box.style.border = "6px solid #02090e";
    
    // Nascondere e mostrare un elemento
    if (listaDinamica.style.display === "none") {
        listaDinamica.style.display = "block"; // Mostra
    } else {
        listaDinamica.style.display = "none";  // Nasconde
    }
});
//Modifica il colore randomico del Titolo h1 cliccandoci soptra 
titoloPrincipale.addEventListener("click", function() {

    let rosso = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let blu = Math.floor(Math.random() * 256);

    let colorergb = "rgb(" + rosso + "," + verde + "," + blu + ")";
    titoloPrincipale.style.color = colorergb;
    console.log("Colore random", colorergb);
});
//Modifica il colore randomico del testo box cliccandoci sopra
box.addEventListener("click", function() {

    let rosso = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let blu = Math.floor(Math.random() * 256);

    let colorergb = "rgb(" + rosso + "," + verde + "," + blu + ")";
    box.style.color = colorergb;
    console.log("Colore random", colorergb);
});