import { Button } from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function LogOutComponent() {
  const navigate = useNavigate();
  const navigateTo = () => {
    localStorage.removeItem("usuario");
    navigate("../../");
  };
  return (
    <Button rightIcon={<IoLogOutOutline />} onClick={navigateTo}>
      Cerrar sesión
    </Button>
  );
}

export default LogOutComponent;
