import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
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
      <GridItem bg="gray.800" area="aside" />
      <GridItem bg="papayawhip" area="main" />
    </Grid>
  );
}

export default App;
