import { Box, Spinner, Text } from "@chakra-ui/react";

function LoadingComponent() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="500px">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text>Cargando...</Text>
    </Box>
  );
}

export default LoadingComponent;
