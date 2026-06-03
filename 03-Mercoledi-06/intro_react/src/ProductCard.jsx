export function ProductCard() {
    const brand = "Apple";
    const model = "MacBook Pro";
    const price = 1999;
    const discount = 200;

    return (
        <div className="product-details">
            {/* Visualizzazione di testi dinamici */}
            <h2>{brand} - {model}</h2>

            {/* Risoluzione algebrica inline */}
            <p>Prezzo Finale: {price - discount} EUR</p>

            {/* Variazione dinamica delle classi e dei valori */}
            <span className={`badge-${price > 1000 ? 'premium' : 'basic'}`}>
                Categoria: {price > 1000 ? "Fascia Alta" : "Standard"}
            </span>
        </div>
    );
}
