export default function SubmitButton({ datiForm, funzionePost }) {
    
  return (
    <button onClick={() => funzionePost(datiForm)} className="btn-submit">
      Invia Nuovo Post
    </button>
  );
}
