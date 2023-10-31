import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface SortingSelectorProps {
  selectedSorting: string;
  onSelectedSorting: (sorting: string) => void;
}

const SortingSelector = ({
  selectedSorting,
  onSelectedSorting,
}: SortingSelectorProps) => {
  const sortingOptions = [
    { label: "Relevance", value: "" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Date added", value: "-added" },
    { label: "Popularity", value: "-metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by:{" "}
        {sortingOptions.find((option) => option.value === selectedSorting)
          ?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingOptions.map((sortingOption) => (
          <MenuItem
            key={sortingOption.value}
            onClick={() => onSelectedSorting(sortingOption.value)}
            value={sortingOption.value}
          >
            {sortingOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingSelector;
