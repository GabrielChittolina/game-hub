import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";
import platformIconMap from "../services/platform-icon-map";

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
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        {...(selectedPlatform && {
          leftIcon: <Icon as={platformIconMap[selectedPlatform.slug]} />,
        })}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
            icon={<Icon as={platformIconMap[platform.slug]} />}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
