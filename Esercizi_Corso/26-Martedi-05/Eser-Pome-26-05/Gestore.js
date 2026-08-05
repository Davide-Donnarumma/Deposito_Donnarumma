const fs = require("fs");

function inviaPagina(res) {

    //legge il file html
    fs.readFile("pagina.html", "utf-8", (errore, dati) => {

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(dati);
    });

}

module.exports = {
    inviaPagina
};