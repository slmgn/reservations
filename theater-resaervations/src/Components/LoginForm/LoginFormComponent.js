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
          setMessage("Correo y/o contraseñas incorrectas.");
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
    <Center w="100%" maxW="360px" m={"auto"} mt="10">
      <Box
        boxShadow="xl"
        p={10}
        w="100%"
        borderWidth="0"
        borderRadius="lg"
        bg="white"
      >
        <VStack>
          <FormControl borderRadius="lg">
            <FormLabel htmlFor="email">Correo electrónico</FormLabel>
            <Input
              focusBorderColor="orange.400"
              id="email"
              name="email"
              type="email"
              value={credentials.email}
              placeholder="Ingrese Correo electrónico"
              onChange={handleChange}
            />
            <FormLabel mt={3} htmlFor="password">
              Contraseña
            </FormLabel>
            <Input
              focusBorderColor="orange.400"
              id="password"
              name="password"
              type="password"
              value={credentials.password}
              placeholder="Ingrese Contraseña"
              onChange={handleChange}
            />
          </FormControl>
          <Text color={"red.700"}>{message}</Text>
        </VStack>
        <Center>
          <Button
            _focus={{
              border: "1px solid orange",
            }}
            m={"auto"}
            mt={5}
            colorScheme="orange"
            onClick={booking}
          >
            Iniciar Sesión
          </Button>
        </Center>
      </Box>
    </Center>
  );
}

export default LoginFormComponent;
