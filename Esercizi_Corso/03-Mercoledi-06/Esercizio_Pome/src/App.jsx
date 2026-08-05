import Header from "./components/Header";
import Footer from "./components/Footer";
import TeamCard from "./components/TeamCard";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <h1 className="titolo-sezione">Il Nostro Team</h1>

        <div className="team-grid">
          <TeamCard
            name="Davide Donnarumma"
            role="Frontend Developer"
            bio="Appassionato di UI e creatore di interfacce interattive in React."
            imageUrl="/avatar_davide_donnarumma.png"
            isPresent={true}
          />

          <TeamCard
            name="Marco Rossi"
            role="Backend Engineer"
            bio="Specialista in Node.js, Express e gestione database MongoDB."
            imageUrl="https://i.pravatar.cc/150?img=54"
            isPresent={false}
          />

          <TeamCard
            name="Laura Bianchi"
            role="UX/UI Designer"
            bio="Fissa per i dettagli e la user experience. Creativa per natura."
            imageUrl="https://i.pravatar.cc/150?img=5"
            isPresent={true}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
