export default function Hero() {
    const sloganPrincipale = "Semplifichiamo il tuo mondo digitale";
    const nomeServizio = "DSK Web Solutions";

    return (
        <header className="hero">
            <h1>{sloganPrincipale}</h1>
            <p>Benvenuti in {nomeServizio}. Innovazione a portata di clic</p>

            <button className="btn-action">Inizia Subito</button>
        </header>
    );
}