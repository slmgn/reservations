import { Box, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import LogOutComponent from "../LogOut/LogOutComponent";

function HeaderComponent() {
  return (
    <Flex borderBottom="2px" borderColor="gray.200">
      <Box p="2">
        <Image
          src="juarez-logo.jpg"
          alt="Teatro Juarez"
          objectFit="cover"
          boxSize="100px"
        />
      </Box>
      <Spacer />
      <Box p="2" display="flex" alignItems="center" justifyContent="center">
        <Link color="teal.500" href="/Login">
          Iniciar sesion
        </Link>
        <LogOutComponent></LogOutComponent>
      </Box>
    </Flex>
  );
}

export default HeaderComponent;
