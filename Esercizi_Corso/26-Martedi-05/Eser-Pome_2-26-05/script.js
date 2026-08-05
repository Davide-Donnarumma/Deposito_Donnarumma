function eseguiSomma() {
    // Prendiamo i valori inseriti dall'utente
    let num1 = Number(document.getElementById('n1').value);
    let num2 = Number(document.getElementById('n2').value);
    
    // Calcoliamo e mostriamo il risultato
    let totale = num1 + num2;
    alert("Il risultato della somma è: " + totale);
}