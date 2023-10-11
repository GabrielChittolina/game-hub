import { SearchIcon } from "@chakra-ui/icons";
import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image borderRadius={"10"} src="https://via.placeholder.com/40" />
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          borderRadius="full"
          placeholder="Search games..."
          _dark={{ bg: "gray.700" }}
          bg="gray.100"
        />
      </InputGroup>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
