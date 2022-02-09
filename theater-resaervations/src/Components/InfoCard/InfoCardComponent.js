import { Box, Button, Heading } from "@chakra-ui/react";
import { IoTicketOutline } from "react-icons/io5";

function InfoCardComponent(props) {
  const { category, title, description } = props;
  return (
    <Box>
      <Heading>{category}</Heading>
      <Heading>{title}</Heading>
      <Heading>{description}</Heading>
      <Button rightIcon={<IoTicketOutline />}>RESERVA YA</Button>
    </Box>
  );
}
export default InfoCardComponent;
