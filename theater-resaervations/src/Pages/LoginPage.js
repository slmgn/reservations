import { Box, Center, Heading } from "@chakra-ui/react";
import LoginFormComponent from "../Components/LoginForm/LoginFormComponent";

function LoginPage() {
  return (
    <Box>
      <Center>
        <Heading>Bienvenido a Teatro Juarez</Heading>
      </Center>
      <LoginFormComponent></LoginFormComponent>
    </Box>
  );
}
export default LoginPage;
