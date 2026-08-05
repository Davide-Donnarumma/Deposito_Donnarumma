let Testo = document.getElementById("Testo");
let bottone = document.getElementById("bottone");
let lista = document.getElementById("lista");

//bottone aggiungi alla lista
bottone.addEventListener("click", function() {
    
    //legge il valore attualmente scritto nell'input
    let testoInserito = Testo.value;

    //controlla che il testo non sia vuoto
    if (testoInserito.trim() !== "") {
        
        //crea dinamicamente un nuovo tag <li>
        let nuovoElemento = document.createElement("li");
        
        //inserisce il testo validato all'interno del nuovo elemento
        nuovoElemento.textContent = testoInserito + " ";

        //bottone elimina lista
        let bottoneElimina = document.createElement("bottoneElimina");
        bottoneElimina.textContent = "Elimina";

        bottoneElimina.addEventListener("click", function() {
            nuovoElemento.remove();
        });

        nuovoElemento.appendChild(bottoneElimina);
        
        //aggiunge il nuovo elemento alla lista
        lista.appendChild(nuovoElemento);
        
        //Si svuota il campo di input
        Testo.value = "";
        
    } else {
        //cliccato senza scrivere nulla di valido
        console.log("Azione annullata: il testo è vuoto.");
    }
    
});