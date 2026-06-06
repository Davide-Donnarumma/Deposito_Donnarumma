import { useForm } from "react-hook-form";

export function RegisterSetup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => console.log(data);

  const onInvalid = (error) => console.log(error);

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Il nome utente è richiesto!",
          minLength: {
            value: 4,
            message: "Il nome deve contenere almeno 4 caratteri",
          },
        })}
      />
      {errors.username && (
        <span style={{ color: "red" }}>{errors.username.message}</span>
      )}
      <button type="submit">Invia</button>
    </form>
  );
}
