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
import { Navigate, useNavigate } from "react-router-dom";

function LoginFormComponent() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const booking = () => {
    fetchUser();
  };

  const fetchUser = () => {
    fetch(
      `http://localhost:3004/users?email=${credentials.email}&author=${credentials.password}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setMessage(
            "email y/o contraseñas incorrectas,verifica y vuelve intentarlo."
          );
        } else {
          setMessage("");
          localStorage.setItem("usuario", JSON.stringify(data[0]));
          navigate(`../Booking/${credentials.email}`);
        }
      })
      .catch((error) => console.log("Se produjo un error"));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({
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
              value={credentials.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              value={credentials.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </FormControl>
          <Text>{message}</Text>
          <Text>Forgot Password?</Text>
          <Button colorScheme="orange" onClick={booking}>
            Log In
          </Button>
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
