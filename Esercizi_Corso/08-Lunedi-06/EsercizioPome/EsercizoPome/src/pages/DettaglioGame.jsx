import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Title,
  Text,
  Group,
  Badge,
  Button,
  Alert,
  Image,
} from "@mantine/core";
import { useGameStore } from "../store/useGameStore";

export function DettaglioGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedGame, fetchGameById } = useGameStore();

  useEffect(() => {
    fetchGameById(id);
  }, [id, fetchGameById]);

  return (
    <Container size="sm" py="xl">
      <Button
        variant="subtle"
        color="cyan"
        onClick={() => navigate(-1)}
        mb="md"
      >
        &larr; DISCONNETTI E TORNA
      </Button>

      {selectedGame ? (
        <Card
          shadow="xl"
          padding="xl"
          radius="md"
          withBorder
          className="cyber-card"
        >
          <Card.Section>
            <Image
              src={selectedGame.thumbnail}
              height={300}
              alt={selectedGame.title}
            />
          </Card.Section>

          <Title order={2} mt="md" mb="sm" style={{ color: "#00ffcc" }}>
            {selectedGame.title}
          </Title>

          <Group mb="md">
            <Badge color="cyan" size="lg">
              ID: {selectedGame.id}
            </Badge>
            <Badge color="pink" size="lg">
              {selectedGame.platforms}
            </Badge>
          </Group>

          <Text size="md" style={{ lineHeight: 1.6, color: "#e0e0e0" }} mb="xl">
            {selectedGame.instructions}
          </Text>

          {selectedGame.open_giveaway_url && (
            <Button
              component="a"
              href={selectedGame.open_giveaway_url}
              target="_blank"
              fullWidth
              color="pink"
              className="cyber-btn"
            >
              ACCEDI AL GIVEAWAY ESTERNO
            </Button>
          )}
        </Card>
      ) : (
        <Alert color="yellow">Dato corrotto o non trovato.</Alert>
      )}
    </Container>
  );
}
