import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Routes, Route, NavLink } from "react-router-dom";
import { ListaGames } from "./pages/ListaGames";
import { DettaglioGame } from "./pages/DettaglioGame";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <nav className="cyber-navbar">
        <NavLink to="/" className="nav-logo">
          DSK_games
        </NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<ListaGames />} />
          <Route path="/game/:id" element={<DettaglioGame />} />
        </Routes>
      </main>
    </MantineProvider>
  );
}
