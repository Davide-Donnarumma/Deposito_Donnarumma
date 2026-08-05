//Importo express
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


require('dotenv').config();
const PORT = process.env.PORT || 5000;

//Arrey videogiochi
const videogiochi = [
    { 
        id: 1, 
        titolo: "Rainbow six siege", 
        piattaforma: "PC" 
    },
    { 
        id: 2, 
        titolo: "God of War", 
        piattaforma: "PlayStation 5" 
    },
    { 
        id: 3, 
        titolo: "Destiny 2", 
        piattaforma: "xbox" 
    }
];

app.get('/api/giochi', (req, res) => {
    res.status(200).json(videogiochi);
});

app.get('/api/giochi/:id', (req, res) => {
    const idCercato = Number(req.params.id);
    const giocoTrovato = videogiochi.find(gioco => gioco.id === idCercato);

    if (giocoTrovato) {
        res.status(200).json(giocoTrovato);
    } else {
        res.status(404).json({ errore: "Risorsa non individuata nel sistema" });
    }

});


//Server in ascolto su porta:5000
app.listen(PORT, () => {
    console.log(`Server del Negozio di Videogiochi avviato`);
    console.log(`In ascolto su: http://localhost:${PORT}/api/giochi`);
    console.log(`Singolo gioco:  http://localhost:${PORT}/api/giochi/1`);
});