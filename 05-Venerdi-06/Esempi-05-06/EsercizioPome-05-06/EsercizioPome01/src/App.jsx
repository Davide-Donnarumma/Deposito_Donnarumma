import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListaCitta from "./pages/ListaCitta";
import DettaglioMeteo from "./pages/DettaglioMeteo";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<ListaCitta />} />
          <Route path="/meteo/:nomeCitta" element={<DettaglioMeteo />} />
          <Route
            path="*"
            element={
              <h2 style={{ color: "#ff003c" }}>
                GAME OVER - Pagina non trovata
              </h2>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
