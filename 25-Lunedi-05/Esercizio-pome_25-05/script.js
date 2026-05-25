//sezione logica pagina inserimento

const formInserimento = document.getElementById("toyForm");

if (formInserimento) {
    formInserimento.addEventListener("submit", function(event) {
        event.preventDefault();

        //Raccolta dei dati
        const nuovoGiocattolo = {
            nome: document.getElementById("nome").value,
            categoria: document.getElementById("categoria").value,
            prezzo: Number(document.getElementById("prezzo").value),
            eta: Number(document.getElementById("eta").value),
            disponibile: document.getElementById("disponibile").value
        };

        let listaGiocattoli = localStorage.getItem("giocattoli");
        if (listaGiocattoli === null) {
            listaGiocattoli = [];
        } else {
            listaGiocattoli = JSON.parse(listaGiocattoli);
        }

        // Inserimento del nuovo oggetto
        listaGiocattoli.push(nuovoGiocattolo);

        //Trasformazione in formato JSON e salvataggio nel LocalStorage
        localStorage.setItem("giocattoli", JSON.stringify(listaGiocattoli));

        alert("Dati del giocattolo trasformati correttamente in JSON e salvati in memoria.");
        formInserimento.reset();
    });
}

//sezione logica pagina elenco

const elencoContainer = document.getElementById("elencoContainer");

if (elencoContainer) {
    const barraAzioni = document.getElementById("azioniElenco");
    const btnScarica = document.getElementById("btnScaricaJSON");
    const btnCancellaTutto = document.getElementById("btnCancellaTutto");

    function renderizzaCatalogo() {
        const datiSalvati = localStorage.getItem("giocattoli");

        if (datiSalvati === null || JSON.parse(datiSalvati).length === 0) {
            elencoContainer.innerHTML = "<p>Nessun giocattolo presente in archivio. Utilizzare la sezione di inserimento.</p>";
            if (barraAzioni) barraAzioni.style.display = "none";
        } else {
            if (barraAzioni) barraAzioni.style.display = "flex";
            
            const giocattoli = JSON.parse(datiSalvati);
            let htmlContenuto = "";

            giocattoli.forEach(toy => {
                const classeStato = toy.disponibile === "si" ? "disponibile" : "non-disponibile";
                const testoStato = toy.disponibile === "si" ? "Disponibile" : "Esaurito";

                htmlContenuto += `
                    <div class="giocattolo-item">
                        <h3>${toy.nome}</h3>
                        <p><strong>Categoria:</strong> ${toy.categoria} | <strong>Età consigliata:</strong> ${toy.eta}+ anni</p>
                        <p><strong>Prezzo di listino:</strong> €${toy.prezzo.toFixed(2)}</p>
                        <p class="${classeStato}">Stato: ${testoStato}</p>
                    </div>
                    <hr style="margin: 15px 0; border: 0; border-top: 1px solid #eee;">
                `;
            });

            elencoContainer.innerHTML = htmlContenuto;
        }
    }

    // Funzionalità di Download JSON tramite Blob
    if (btnScarica) {
        btnScarica.addEventListener("click", function() {
            const datiContenuto = localStorage.getItem("giocattoli");
            
            if (datiContenuto) {
                // Formatta il JSON per renderlo leggibile
                const jsonFormattato = JSON.stringify(JSON.parse(datiContenuto), null, 2);
                
                const fileBlob = new Blob([jsonFormattato], { type: "application/json" });
                const urlTemporaneo = URL.createObjectURL(fileBlob);
                
                const linkDownload = document.createElement("a");
                linkDownload.href = urlTemporaneo;
                linkDownload.download = "inventario_giocattoli.json";
                
                linkDownload.click();
                URL.revokeObjectURL(urlTemporaneo);
            }
        });
    }

    // Funzionalità di Cancellazione totale
    if (btnCancellaTutto) {
        btnCancellaTutto.addEventListener("click", function() {
            if (confirm("Sei sicuro di voler eliminare definitivamente tutti i giocattoli dall'archivio?")) {
                localStorage.removeItem("giocattoli");
                renderizzaCatalogo();
            }
        });
    }

    // Avvio del rendering al caricamento della pagina
    renderizzaCatalogo();
}

//sezione logica pagina riepilogo

const statTotale = document.getElementById("totaleGiocattoli");

if (statTotale) {
    const datiSalvati = localStorage.getItem("giocattoli");

    if (datiSalvati !== null) {
        const giocattoli = JSON.parse(datiSalvati);
        const totale = giocattoli.length;
        
        statTotale.innerText = totale;

        let sommaPrezzi = 0;
        let categorieSet = new Set();
        let esauritiHtml = "";
        let contatoreEsauriti = 0;

        giocattoli.forEach(toy => {
            sommaPrezzi += toy.prezzo;
            categorieSet.add(toy.categoria);

            if (toy.disponibile === "no") {
                contatoreEsauriti++;
                esauritiHtml += `<li><strong>${toy.nome}</strong> (${toy.categoria}) - Prezzo: €${toy.prezzo.toFixed(2)}</li>`;
            }
        });

        if (totale > 0) {
            const media = sommaPrezzi / totale;
            document.getElementById("prezzoMedio").innerText = "€" + media.toFixed(2);
        }

        document.getElementById("listaCategorie").innerText = Array.from(categorieSet).join(", ");

        if (contatoreEsauriti > 0) {
            document.getElementById("listaEsauriti").innerHTML = esauritiHtml;
        } else {
            document.getElementById("listaEsauriti").innerHTML = "<li>Tutti gli articoli risultano attualmente disponibili a magazzino.</li>";
        }
    }
}

