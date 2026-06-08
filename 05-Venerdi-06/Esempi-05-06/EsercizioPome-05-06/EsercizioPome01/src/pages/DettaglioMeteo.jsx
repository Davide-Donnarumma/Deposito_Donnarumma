import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function DettaglioMeteo() {
  const { nomeCitta } = useParams();

  const navigate = useNavigate();

  const [meteo, setMeteo] = useState(null);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(false);

  const API_KEY = "INSERISCI_QUI_LA_TUA_API_KEY_DI_OPENWEATHER";

  useEffect(() => {
    const recuperaMeteo = () => {
      setCaricamento(true);
      setErrore(false);

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${nomeCitta}&appid=${API_KEY}&units=metric&lang=it`,
        )
        .then((response) => {
          setMeteo(response.data);
          setCaricamento(false);
        })
        .catch((err) => {
          console.error("Errore API:", err);
          setErrore(true);
          setCaricamento(false);
        });
    };

    recuperaMeteo();
  }, [nomeCitta]);

  // Rendering condizionali
  if (caricamento)
    return (
      <h2 className="loading-text">CONNESSIONE SATELLITARE IN CORSO...</h2>
    );
  if (errore)
    return (
      <div className="error-box">
        <h2>⚠️ ERRORE CRITICO</h2>
        <p>
          Impossibile localizzare "{nomeCitta}". Città inesistente o offline.
        </p>
        <button className="btn-back" onClick={() => navigate(-1)}>
          🔙 RITORNA
        </button>
      </div>
    );

  // Rendering finale se i dati sono arrivati
  return (
    <div className="dettaglio-box">
      <h1>[ STATO_ATTUALE : {meteo.name.toUpperCase()} ]</h1>

      <div className="meteo-stats">
        <p className="temp">{Math.round(meteo.main.temp)}°C</p>
        <p className="descrizione">
          {meteo.weather[0].description.toUpperCase()}
        </p>

        <div className="sub-stats">
          <p>💧 UMIDITÀ: {meteo.main.humidity}%</p>
          <p>🌪️ VENTO: {meteo.wind.speed} m/s</p>
        </div>
      </div>

      <button className="btn-back" onClick={() => navigate("/")}>
        🔙 TORNA ALLA BASE
      </button>
    </div>
  );
}
