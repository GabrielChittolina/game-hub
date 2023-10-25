import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface SearchInputProps {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ref.current && onSearch(ref.current.value);
      }}
    >
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
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
