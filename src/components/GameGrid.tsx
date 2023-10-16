import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";

const GameGrid = () => {
  const { games, error, loading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid minChildWidth="270px" spacing="24px">
        {loading && [...Array(16)].map((_, i) => <SkeletonCard key={i} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
