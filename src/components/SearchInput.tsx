import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents={"none"}>
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        borderRadius="full"
        placeholder="Search games..."
        _dark={{ bg: "gray.700" }}
        bg="gray.100"
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
