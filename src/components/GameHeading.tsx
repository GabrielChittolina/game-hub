import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { genre, platform } = gameQuery;
  const heading = `${platform?.name ?? ""} ${genre?.name ?? "All"} games`;

  return (
    <Heading size="2xl" p={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
