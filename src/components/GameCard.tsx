import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card maxW="sm">
      <Image src={game.background_image} alt={game.name} borderTopRadius="lg" />
      <CardBody>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <Heading size="md">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
