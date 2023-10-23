import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={`
        "nav nav"
        "aside main"
      `}
      templateColumns="240px 1fr"
      templateRows="80px 1fr"
      gap={4}
      h="100vh"
    >
      <GridItem area="nav" p="10px">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" px={5}>
        <GenreList
          selectedGenre={selectedGenre}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
