import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { Genre } from "../hooks/useGenres";

interface GameGridProps {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { data, error, loading } = useGames(selectedGenre?.id);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid minChildWidth="270px" spacing="24px">
        {loading && [...Array(16)].map((_, i) => <SkeletonCard key={i} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
