export default function FeatureCard({ titolo, descrizione }) {
    return (
        <div className="card">
            <h3>{titolo}</h3>
            <p>{descrizione}</p>
        </div>
    );
}