import {
  Card,
  CardBody,
  Heading,
  Image,
  Badge,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const metacriticColor = () => {
    if (game.metacritic >= 75) return "green";
    if (game.metacritic >= 50) return "yellow";
    return "red";
  };

  return (
    <Card maxW="sm">
      <Image src={game.background_image} alt={game.name} borderTopRadius="lg" />
      <CardBody>
        <HStack justify={"space-between"} mb="2">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Tooltip label="Metascore" placement="top">
            <Badge
              variant="outline"
              borderRadius="4px"
              px="2"
              colorScheme={metacriticColor()}
              fontSize="sm"
            >
              {game.metacritic}
            </Badge>
          </Tooltip>
        </HStack>
        <Heading size="md">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
