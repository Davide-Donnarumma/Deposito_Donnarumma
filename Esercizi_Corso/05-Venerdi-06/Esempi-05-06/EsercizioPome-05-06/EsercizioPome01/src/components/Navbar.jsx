import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="cyber-nav">
      <div className="logo">
        METEO<span>DSK</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            BASE DATI CITTÀ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
