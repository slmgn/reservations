import { Button, Center, Tooltip } from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function LogOutComponent() {
  const navigate = useNavigate();
  const navigateTo = () => {
    localStorage.removeItem("usuario");
    navigate("../../Login");
  };
  return (
    <Tooltip label="Cerrar Sesión" aria-label="A tooltip">
      <Center ml="5">
        <Button
          rightIcon={<IoLogOutOutline />}
          onClick={navigateTo}
          color="white"
          _focus={{
            border: "1px solid orange",
          }}
          m={"auto"}
          mt={5}
          colorScheme="orange"
        ></Button>
      </Center>
    </Tooltip>
  );
}

export default LogOutComponent;
