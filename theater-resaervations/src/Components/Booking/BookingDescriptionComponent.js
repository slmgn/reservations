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

function BookingDescriptionComponent(props) {
  const { detail } = props;
  return (
    <Box maxW={500}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Cant.</Th>
            <Th>Descripción</Th>
            <Th isNumeric>Precio</Th>
          </Tr>
        </Thead>
        <Tbody>
          {detail ? (
            detail.map((item, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{item.cantidad}</Td>
                  <Td>{item.descripcion}</Td>
                  <Td isNumeric>{item.precio}</Td>
                </Tr>
              );
            })
          ) : (
            <></>
          )}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th>Total</Th>
            <Th isNumeric>
              {detail
                ? detail
                    .map((item) => item.precio)
                    .reduce((prev, curr) => prev + curr, 0)
                : 0}{" "}
              COP
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
}

export default BookingDescriptionComponent;
