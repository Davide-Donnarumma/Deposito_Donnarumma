import { useForm } from "@mantine/form";
import { TextInput, Button, Card, Title, Group } from "@mantine/core";
import { useGameStore } from "../store/useGameStore";

export function FormGame() {
  const addGiveaway = useGameStore((state) => state.addGiveaway);

  const form = useForm({
    initialValues: { title: "", worth: "", platforms: "" },
    validate: {
      title: (val) => (val.length < 3 ? "Titolo troppo corto" : null),
      platforms: (val) => (val.length < 2 ? "Specifica la piattaforma" : null),
    },
  });

  const handleSubmit = (values) => {
    addGiveaway({
      title: values.title,
      worth: values.worth || "Free",
      platforms: values.platforms,
      instructions: "Caricamento manuale effettuato dall'utente.",
    });
    form.reset();
  };

  return (
    <Card
      shadow="0 0 15px rgba(0, 255, 204, 0.2)"
      padding="lg"
      radius="md"
      withBorder
      className="cyber-form"
    >
      <Title
        order={3}
        ta="center"
        mb="md"
        style={{ color: "#00ffcc", letterSpacing: "2px" }}
      >
        INSERISCI NUOVO DATO
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Nome del Gioco"
          placeholder="Es: Cyberpunk 2077"
          required
          {...form.getInputProps("title")}
          mb="sm"
        />
        <Group grow mb="lg">
          <TextInput
            label="Piattaforma"
            placeholder="PC, Steam, PS5..."
            required
            {...form.getInputProps("platforms")}
          />
          <TextInput
            label="Valore Commerciale"
            placeholder="Es: $59.99"
            {...form.getInputProps("worth")}
          />
        </Group>

        <Button
          type="submit"
          fullWidth
          variant="outline"
          color="cyan"
          className="cyber-btn"
        >
          ESEGUI UPLOAD
        </Button>
      </form>
    </Card>
  );
}
