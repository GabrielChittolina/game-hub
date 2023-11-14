import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortingSelector from "./components/SortingSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string;
  page: number;
  pageSize: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    pageSize: 20,
  } as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap={4}
      px={10}
      templateColumns={{
        base: "1fr",
        lg: "210px 1fr",
      }}
    >
      <GridItem area="nav" my={6}>
        <NavBar
          onSearch={(search) => setGameQuery({ ...gameQuery, search, page: 1 })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" mr={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre, page: 1 })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} mb={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform, page: 1 })
            }
          />
          <SortingSelector
            selectedSorting={gameQuery.ordering}
            onSelectedSorting={(ordering) =>
              setGameQuery({ ...gameQuery, ordering, page: 1 })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
        <Button
          onClick={() =>
            setGameQuery({
              ...gameQuery,
              page: (gameQuery.page ?? 1) + 1,
            })
          }
        >
          Load more
        </Button>
      </GridItem>
    </Grid>
  );
}

export default App;
