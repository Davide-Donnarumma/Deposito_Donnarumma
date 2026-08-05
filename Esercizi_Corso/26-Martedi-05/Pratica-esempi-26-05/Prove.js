const http = require("http");


const server = http.createServer((req, res) => {


    // Imposta il tipo di contenuto

    res.writeHead(200, { "Content-Type": "text/html" });


    // Invia HTML al browser

    res.end("<h1>Hello World</h1>");

});


server.listen(3000, () => {

 console.log("Server avviato su http://localhost:3000");

});

