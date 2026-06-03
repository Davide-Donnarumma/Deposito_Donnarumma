export default function TeamCard({ name, role, bio, imageUrl, isPresent }) {
  const classeCard = isPresent ? "card presente" : "card assente";

  const testoBottone = isPresent ? "Disponibile" : "In Riunione / Assente";

  return (
    <article className={classeCard}>
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <p className="role">{role}</p>
        <p className="bio">{bio}</p>
        <button className="status-btn">{testoBottone}</button>
      </div>
    </article>
  );
}
