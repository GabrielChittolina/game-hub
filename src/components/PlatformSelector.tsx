import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface PlatformSelectorProps {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({
  selectedPlatform,
  onSelectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
