import { Box, Image, Heading, Wrap } from "@chakra-ui/react";
import LoginFormComponent from "../Components/LoginForm/LoginFormComponent";

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
    </Box>
  );
}
export default LoginPage;
