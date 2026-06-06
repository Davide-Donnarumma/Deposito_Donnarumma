import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { ListaPost } from "./components/ListaPost";
import { DettaglioPost } from "./components/DettaglioPost";

function App() {
  const visualizzaStileAttivo = ({ isActive }) => ({
    color: isActive ? "gold" : "white",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div>
      <nav>
        <NavLink to="/" style={visualizzaStileAttivo}>
          Home
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ListaPost />} />
        <Route path="/posts/:id" element={<DettaglioPost />} />
      </Routes>
    </div>
  );
}

export default App;
