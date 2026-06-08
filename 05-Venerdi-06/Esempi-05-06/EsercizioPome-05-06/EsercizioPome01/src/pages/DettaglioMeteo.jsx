import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useWeatherStore } from "../store/useWeatherStore"; 

export default function DettaglioMeteo() {
  const { nomeCitta } = useParams();
  const navigate = useNavigate();

  const { meteo, caricamento, errore, fetchMeteo, resetMeteo } = useWeatherStore();

  useEffect(() => {
    fetchMeteo(nomeCitta);
    return () => resetMeteo();
  }, [nomeCitta, fetchMeteo, resetMeteo]);

  
  if (caricamento) return <h2 className="loading-text">CONNESSIONE SATELLITARE IN CORSO...</h2>;
  
  if (errore) return (
    <div className="error-box">
      <h2>⚠️ ERRORE CRITICO</h2>
      <p>Impossibile localizzare "{nomeCitta}". Controllare la mappa satellitare.</p>
      <button className="btn-back" onClick={() => navigate(-1)}>🔙 RITORNA</button>
    </div>
  );

  return (
    <div className="dettaglio-box">
      <h1>[ ZONA: {meteo.nome.toUpperCase()} ({meteo.nazione}) ]</h1>
      
      <div className="meteo-stats">
        <p className="temp">{Math.round(meteo.temperatura)}°C</p>
        <p className="descrizione">{meteo.descrizione.toUpperCase()}</p>
        
        <div className="sub-stats">
          <p>💧 UMIDITÀ: {meteo.umidita}%</p>
          <p>🌪️ VENTO: {meteo.vento} km/h</p>
        </div>
      </div>

      <button className="btn-back" onClick={() => navigate("/")}>
        🔙 TORNA ALLA BASE
      </button>
    </div>
  );
}