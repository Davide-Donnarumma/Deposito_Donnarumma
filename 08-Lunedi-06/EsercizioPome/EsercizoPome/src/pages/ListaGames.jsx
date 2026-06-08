import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Text,
  Group,
  Button,
  Alert,
  Loader,
  Center,
  Image,
  Badge,
} from "@mantine/core";
import { useGameStore } from "../store/useGameStore";
import { FormGame } from "../components/FormGame";

export function ListaGames() {
  const navigate = useNavigate();
  const { giveaways, loading, error, fetchGiveaways, deleteGiveaway } =
    useGameStore();

  useEffect(() => {
    fetchGiveaways();
  }, [fetchGiveaways]);

  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb="xl" className="glitch-title">
        GAMERPOWER DATABASE
      </Title>

      <div style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
        <FormGame />
      </div>

      {error && (
        <Alert color="red" mb="lg">
          {error}
        </Alert>
      )}

      {loading && giveaways.length === 0 ? (
        <Center my="xl">
          <Loader color="cyan" size="xl" type="bars" />
        </Center>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {giveaways.map((game) => (
            <Card
              key={game.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="cyber-card"
            >
              <Card.Section>
                <Image src={game.thumbnail} height={160} alt={game.title} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Title order={4} lineClamp={1}>
                  {game.title}
                </Title>
                <Badge color="pink" variant="light">
                  {game.worth === "N/A" ? "FREE" : game.worth}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                Piattaforma: {game.platforms}
              </Text>

              <Group grow mt="auto">
                <Button
                  variant="light"
                  color="cyan"
                  onClick={() => navigate(`/game/${game.id}`)}
                >
                  SCANSIONA
                </Button>
                <Button
                  variant="outline"
                  color="red"
                  onClick={() => deleteGiveaway(game.id)}
                >
                  ELIMINA
                </Button>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}
