import { IconType } from "react-icons";
import { AiFillWindows, AiFillAndroid, AiFillApple } from "react-icons/ai";
import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsGlobe,
} from "react-icons/bs";
import { GiGameConsole } from "react-icons/gi";
import { ImTux } from "react-icons/im";
import { IoLogoGameControllerA } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";

const platformIconMap: { [key: string]: IconType } = {
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

export default platformIconMap;
