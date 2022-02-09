import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

function LoginFormComponent() {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Center mt="10">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" bg="white">
        <VStack>
          <FormControl p="6" borderRadius="lg">
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={user.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              value={user.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </FormControl>
          <Text>Forgot Password?</Text>
          <Button colorScheme="orange">Log In</Button>
          <Text>
            Not Member?
            <Link color="orange.500" href="#">
              Sign Up
            </Link>
          </Text>
        </VStack>
      </Box>
    </Center>
  );
}

export default LoginFormComponent;
