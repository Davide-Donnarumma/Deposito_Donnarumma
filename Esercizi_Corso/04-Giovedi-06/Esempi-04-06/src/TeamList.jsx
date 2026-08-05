export function TeamList() {
  const members = [
    { id: 101, name: "Alice", role: "Lead" },
    { id: 102, name: "Bob", role: "Designer" },
    { id: 103, name: "Charlie", role: "Developer" },
  ];

  return (
    <div className="team-container">
      <h3>Membri del Gruppo</h3>
      <ul>
        {/* Iteriamo sull'array generando elementi li */}
        {members.map((member) => (
          <li key={member.id} className="member-item">
            <strong>{member.name}</strong> - <span>{member.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
