// Selezione del form
const formZoo = document.getElementById("formZoo");

// Selezione del contenitore risultato
const risultato = document.getElementById("risultato");

// Evento submit del form
formZoo.addEventListener("submit", function(event) {

// Blocca il refresh automatico della pagina
event.preventDefault();

// Recupero valori degli input
const nomeAnimale = document.getElementById("nomeAnimale").value;
const specie = document.getElementById("specie").value;

// Inserimento dinamico del risultato
risultato.innerHTML = `
<h2>Animale registrato</h2>
<p><strong>Nome:</strong> ${nomeAnimale}</p>
<p><strong>Specie:</strong> ${specie}</p>
`;
});