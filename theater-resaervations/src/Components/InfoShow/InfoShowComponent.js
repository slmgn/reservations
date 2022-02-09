import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";

function InfoShowComponent(props) {
  const { date, title, price } = props;

  const prices = (price) => {
    return `Desde ${price.general} COP a ${price.vip} COP`;
  };
  return (
    <Box>
      <Heading>Funciones</Heading>
      <Text>Escoge la hora y fecha de tu funcion</Text>
      <Text>FEBRERO</Text>
      <SimpleGrid columns={4} spacing={10} p="4" bg="red.500">
        <Box>
          <Text>{date}</Text>
          <Text>8:00pm</Text>
        </Box>
        <Text>{title}</Text>
        <Text>{prices(price)}</Text>
        <Button>Selecciona tu asiento</Button>
      </SimpleGrid>
    </Box>
  );
}

export default InfoShowComponent;
