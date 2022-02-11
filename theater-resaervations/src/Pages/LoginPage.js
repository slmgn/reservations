import { Box, Image, Heading, Wrap, Icon, Center } from "@chakra-ui/react";
import LoginFormComponent from "../Components/LoginForm/LoginFormComponent";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Box mt="30px">
      <Wrap justify={"center"}>
        <Heading color="gray.5" textAlign="center" w="100%">
          Bienvenido a Teatro Juarez
        </Heading>
        <Box w="100%" p="2">
          <Image
            m="auto"
            src={process.env.PUBLIC_URL + "/juarez-logo.jpg"}
            alt="Teatro Juarez"
            objectFit="cover"
            boxSize="100px"
          />
        </Box>
      </Wrap>
      <LoginFormComponent></LoginFormComponent>
      <Center m={4}>
        <Link to="/" color="orange.900">
          <Icon as={GoHome} />
          Ir al inicio
        </Link>
      </Center>
    </Box>
  );
}
export default LoginPage;
