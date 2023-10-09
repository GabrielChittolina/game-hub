import { SearchIcon } from "@chakra-ui/icons";
import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image borderRadius={"10"} src="https://via.placeholder.com/40" />
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input borderRadius="full" placeholder="Search games..." />
      </InputGroup>
      <HStack>
        <Switch colorScheme="teal" size="md" />
        <p>Dark Mode</p>
      </HStack>
    </HStack>
  );
};

export default NavBar;
