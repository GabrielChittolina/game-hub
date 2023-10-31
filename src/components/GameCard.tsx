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
import getCroppedImageUrl from "../services/image-url";

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
    <Card position={"relative"}>
      <Image
        src={getCroppedImageUrl(game.background_image, 600, 400)}
        alt={game.name}
        borderTopRadius="lg"
      />
      <CardBody>
        <HStack justify={"space-between"} mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          {game.metacritic && (
            <Tooltip label="Metascore" placement="top">
              <Badge
                variant="outline"
                borderRadius="4px"
                px="2"
                colorScheme={metacriticColor()}
                fontSize="md"
              >
                {game.metacritic}
              </Badge>
            </Tooltip>
          )}
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
