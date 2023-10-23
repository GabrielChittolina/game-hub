import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
