import { Alert, AlertIcon, Box, Button, CloseButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function AlertComponent() {
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplay("none");
    }, 2000);
  }, [display]);

  return (
    <Box>
      <Button onClick={() => setDisplay("")}></Button>
      <Alert status="success" display={display}>
        <AlertIcon />
        Data uploaded to the server. Fire on!
      </Alert>
    </Box>
  );
}
export default AlertComponent;
