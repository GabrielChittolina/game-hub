import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

// temporary fetch
import axios from "axios";
import { useEffect, useState } from "react";

// temporary key
const key = "3a87c61723894f6db7bd9c657f3830e1";

interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  rating: number;
  background_image: string;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  // temporary fetch
  useEffect(() => {
    axios
      .get<Game[]>("https://api.rawg.io/api/xgames?key=" + key)
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid
      templateAreas={`
        "nav nav"
        "aside main"
      `}
      templateColumns="210px 1fr"
      templateRows="80px 1fr"
      gap={4}
      h="100vh"
    >
      <GridItem area="nav" p="10px">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" />
      <GridItem area="main" />
    </Grid>
  );
}

export default App;
