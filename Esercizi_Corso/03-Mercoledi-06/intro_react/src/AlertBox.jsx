export function AlertBox() {
const isError = false;

const styleConfig = {
backgroundColor: isError ? '#ffebeb' : '#ebefff',
color: isError ? '#d32f2f' : '#1976d2',
padding: '20px',
borderRadius: '8px',
border: `2px solid ${isError ? '#d32f2f' : '#1976d2'}`
};

return (
<div style={styleConfig}>
<h4>Stato Sistema</h4>
<p>{isError ? "Errore di connessione rilevato." : "Operazione completata."}</p>
</div>
);
}