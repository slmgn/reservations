import {
  Box,
  Button,
  Image,
  Text,
  Badge,
  Heading,
  Center,
} from "@chakra-ui/react";
import { IoTicketOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function InfoShowComponent(props) {
  const { show } = props;
  const navigate = useNavigate();

  const handleBookin = () => {
    navigate(`../Booking/${show.id}`);
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={process.env.PUBLIC_URL + show.poster} alt="Poster" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {show.category}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="5"
          >
            <Text>{show.date}</Text>
            <Text>{show.hour}</Text>
          </Box>
        </Box>

        <Box mt="1" fontWeight="bold" as="h3" lineHeight="tight" isTruncated>
          {show.title}
        </Box>
        <Text>{show.description}</Text>

        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            Desde {show.prices.general} COP a {show.prices.vip} COP
          </Box>
        </Box>
      </Box>
      <Center>
        <Button
          _focus={{
            border: "1px solid orange",
          }}
          m={2}
          colorScheme="orange"
          rightIcon={<IoTicketOutline />}
          onClick={handleBookin}
        >
          Reservar
        </Button>
      </Center>
    </Box>
  );
}

export default InfoShowComponent;
