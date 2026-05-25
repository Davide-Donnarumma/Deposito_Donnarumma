const output = document.getElementById("output");


const studente = {

    nome: "Marco",

    cognome: "Rossi",

    eta: 21,

    corso: "Web Development"

};


document.getElementById("serializzaBtn").addEventListener("click", function () {

    const jsonString = JSON.stringify(studente);


    output.textContent = jsonString;

});


document.getElementById("deserializzaBtn").addEventListener("click", function () {

    const jsonString = '{"nome":"Marco","cognome":"Rossi","eta":21,"corso":"Web Development"}';


    const oggettoStudente = JSON.parse(jsonString);


    output.textContent =

        "Nome: " + oggettoStudente.nome + "\n" +

        "Cognome: " + oggettoStudente.cognome + "\n" +

        "Età: " + oggettoStudente.eta + "\n" +

        "Corso: " + oggettoStudente.corso;

});