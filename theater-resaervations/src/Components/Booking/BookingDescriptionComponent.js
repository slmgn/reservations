import {
  Button,
  Box,
  Center,
  Td,
  Tbody,
  Tr,
  Th,
  Tfoot,
  Table,
  Thead,
} from "@chakra-ui/react";

import { IoTicketOutline } from "react-icons/io5";
function BookingDescriptionComponent(props) {
  const x = 2;
  const y = "V.I.P";
  const z = 100;

  return (
    <Box bg="gray.400" maxW={500} color="white">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Cant.</Th>
            <Th>Descripción</Th>
            <Th isNumeric>Precio</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{x}</Td>
            <Td>{y}</Td>
            <Td isNumeric>{z}</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th>Total</Th>
            <Th isNumeric>100</Th>
          </Tr>
        </Tfoot>
      </Table>
      <Center>
        <Button
          _focus={{
            border: "1px solid orange",
          }}
          m={2}
          colorScheme="orange"
          rightIcon={<IoTicketOutline />}
        >
          Reservar
        </Button>
      </Center>
    </Box>
  );
}

//CREO QUE UNA GRID SERIA LO MEJOR

export default BookingDescriptionComponent;
