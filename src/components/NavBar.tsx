import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/ai-generated-8677967_1280.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
