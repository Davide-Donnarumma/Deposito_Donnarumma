export function Dashboard() {
    const user = { name: "DSK", role: "admin" };

    const getSystemDate = () => {
        return new Date().toLocaleDateString("it-IT", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    return (
        <div className="status-bar">
            <p>Accesso effettuato: {user.name.toUpperCase()} ({user.role})</p>
            {/* Invocazione del metodo per la formattazione */}
            <p>Data corrente: {getSystemDate()}</p>
        </div>
    );
}