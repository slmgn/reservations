import { Box, SimpleGrid, Text } from "@chakra-ui/react";

function FooterComponent() {
  return (
    <SimpleGrid minChildWidth="120px" spacing={10} bg="tomato">
      <Box height="80px">
        <Text>Teatro Juarez</Text>
        <Text>Carrera 19, Calle 25, Barquisimeto 3001, Lara, Venezuela</Text>
        <Text>+58 251-2521618</Text>
      </Box>
      <Box bg="tomato" height="80px">
        <Text>SIGUENOS</Text>
      </Box>
    </SimpleGrid>
  );
}
export default FooterComponent;
