export function ProfileCard(props) {
    return (
        <div className="profile-card">
            <h3>{props.user.firstName} {props.user.lastName}</h3>
            <p>Ruolo: {props.user.role}</p>
            <p>Competenze: {props.skills.join(', ')}</p>
        </div>
    );
}