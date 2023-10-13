import { HStack, Tooltip, Icon, Center } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/useGames";
import { AiFillAndroid, AiFillApple, AiFillWindows } from "react-icons/ai";
import { BsNintendoSwitch, BsPlaystation, BsXbox } from "react-icons/bs";
import { ImTux } from "react-icons/im";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { IoLogoGameControllerA } from "react-icons/io";
import { GiGameConsole } from "react-icons/gi";
import { BsGlobe } from "react-icons/bs";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: AiFillWindows,
    playstation: BsPlaystation,
    xbox: BsXbox,
    ios: MdPhoneIphone,
    android: AiFillAndroid,
    mac: AiFillApple,
    linux: ImTux,
    nintendo: BsNintendoSwitch,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
    sega: SiSega,
    "3do": IoLogoGameControllerA,
    "neo-geo": GiGameConsole,
    web: BsGlobe,
  };

  return (
    <HStack spacing="2">
      {platforms.map((platform) => {
        return (
          <Tooltip key={platform.id} label={platform.name} placement="top">
            <Center>
              <Icon as={iconMap[platform.slug]} />
            </Center>
          </Tooltip>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
