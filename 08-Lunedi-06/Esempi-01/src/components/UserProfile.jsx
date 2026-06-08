import { useUserStore } from "../store/useUserStore";

export function UserProfile() {
  // Sottoscrizioni selettive alle singole chiavi dello store
  const username = useUserStore((state) => state.username);
  const role = useUserStore((state) => state.role);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <p className="info-text">Nessun utente autenticato.</p>;
  }

  return (
    <div className="card-profile">
      <h3>Utente: {username}</h3>
      <p>Ruolo abilitato: {role}</p>
    </div>
  );
}
