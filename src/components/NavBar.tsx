import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack spacing={5}>
      <Image
        onClick={() => (window.location.href = "/")}
        cursor="pointer"
        borderRadius={"10"}
        src="https://via.placeholder.com/40"
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
