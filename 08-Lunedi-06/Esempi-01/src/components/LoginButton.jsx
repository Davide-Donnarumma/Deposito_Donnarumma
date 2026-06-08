import { useUserStore } from "../store/useUserStore";

export function LoginButton() {
  // Estrazione delle azioni tramite selettore
  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <div className="button-group">
      {isLoggedIn ? (
        <button onClick={logout} className="btn-secondary">
          Disconnetti
        </button>
      ) : (
        <button
          onClick={() => login("Sofia", "Amministratore")}
          className="btn-primary"
        >
          Accedi come Sofia
        </button>
      )}
    </div>
  );
}
