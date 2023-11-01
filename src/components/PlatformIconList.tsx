import { HStack, Tooltip, Icon, Center } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import platformIconMap from "../services/platform-icon-map";

interface PlatformIconListProps {
  platforms?: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  return (
    <HStack spacing="2" minH={6}>
      {platforms?.map((platform) => {
        return (
          <Tooltip key={platform.id} label={platform.name} placement="top">
            <Center>
              <Icon as={platformIconMap[platform.slug]} color={"gray.400"} />
            </Center>
          </Tooltip>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
