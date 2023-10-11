import { useColorMode, HStack, Switch } from "@chakra-ui/react";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="md"
      />
      <p>Dark Mode</p>
    </HStack>
  );
};

export default ColorModeSwitch;
