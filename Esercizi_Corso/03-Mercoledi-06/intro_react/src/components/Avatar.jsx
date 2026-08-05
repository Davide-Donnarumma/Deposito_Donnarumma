// Assegniamo una stringa di default a imageUrl ed un valore booleano a isRound
export function Avatar({
imageUrl = "https://example.com/default-avatar.png",
size = 50,
isRound = true
}) {
const avatarStyle = {
width: `${size}px`,
height: `${size}px`,
borderRadius: isRound ? '50%' : '8px'
};

return (
<img
src={imageUrl}
style={avatarStyle}
alt="Profilo Utente"
/>
);
}