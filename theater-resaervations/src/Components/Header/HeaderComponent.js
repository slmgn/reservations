import { Box, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LogOutComponent from "../LogOut/LogOutComponent";
import ProfileComponent from "../Profile/ProfileComponent";

function HeaderComponent() {
  const [user, setUser] = useState({ name: "", photo: "" });
  const showInfo = localStorage.length > 0;

  useEffect(() => {
    if (showInfo) {
      const { name, photo } = JSON.parse(localStorage.getItem("usuario"));
      const profile = { name: name, photo: photo };
      setUser(profile);
    }
  }, []);

  return (
    <Flex borderBottom="2px" borderColor="gray.200">
      <Box p="2">
        <Image
          src={process.env.PUBLIC_URL + "/juarez-logo.jpg"}
          alt="Teatro Juarez"
          objectFit="cover"
          boxSize="100px"
        />
      </Box>
      <Spacer />
      <Box p="2" display="flex" alignItems="center" justifyContent="center">
        {showInfo ? (
          <Box>
            <ProfileComponent
              name={user.name}
              photo={user.photo}
            ></ProfileComponent>
            <LogOutComponent></LogOutComponent>
          </Box>
        ) : (
          <Box p={1} borderRadius={6} bg="orange.400">
            <Link m={2} color="white" href="/Login">
              Iniciar sesion
            </Link>
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default HeaderComponent;
