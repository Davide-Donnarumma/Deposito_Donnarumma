import FeatureCard from './FeatureCard';

export default function FeaturesGrid() {
    return (
        <section className="features-section">
            <h2>I Nostri Servizi</h2>

            <div className="grid">
                <FeatureCard
                    titolo="Veloce"
                    descrizione="Prestazioni ottimizzate per caricamenti fulminei."
                />
                <FeatureCard
                    titolo="Sicuro"
                    descrizione="I tuoi dati sono protetti con le migliori tecnologie."
                />
                <FeatureCard
                    titolo="Semplice"
                    descrizione="Un'interfaccia intuitiva alla portata di tutti."
                />
            </div>
        </section>
    );
}