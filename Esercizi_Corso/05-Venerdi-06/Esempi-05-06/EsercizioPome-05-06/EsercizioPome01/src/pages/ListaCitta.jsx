import { useNavigate } from "react-router-dom";

export default function ListaCitta() {
  const navigate = useNavigate();

  const cittaDisponibili = [
    { id: 1, nome: "Tokyo" },
    { id: 2, nome: "Milano" },
    { id: 3, nome: "New York" },
    { id: 4, nome: "Londra" },
  ];

  const gestisciClick = (nomeCitta) => {
    navigate(`/meteo/${nomeCitta}`);
  };

  return (
    <div className="dashboard">
      <h1 className="glitch-text">SELEZIONA ZONA OPERATIVA</h1>

      <div className="cards-grid">
        {cittaDisponibili.map((citta) => (
          <div key={citta.id} className="cyber-card">
            <h2>{citta.nome}</h2>
            <button
              className="btn-scan"
              onClick={() => gestisciClick(citta.nome)}
            >
              SCAN METEO
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
