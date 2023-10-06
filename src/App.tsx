import { Grid, GridItem } from "@chakra-ui/react";

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
      <GridItem bg="tomato" area="nav" />
      <GridItem bg="gray.800" area="aside" />
      <GridItem bg="papayawhip" area="main" />
    </Grid>
  );
}

export default App;
