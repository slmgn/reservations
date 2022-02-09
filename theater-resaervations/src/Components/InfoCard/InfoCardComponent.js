import { Box, Button, Heading, Image, Text, Badge } from "@chakra-ui/react";
import { IoTicketOutline } from "react-icons/io5";
import DateCardComponent from "../DateCard/DateCardComponent";
import { DateTime } from "luxon";

function InfoCardComponent(props) {
  const showInfo = localStorage.length > 0;

  const { category, title, description, poster, dates } = props;
  const { date, time, prices } = dates[0];

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={process.env.PUBLIC_URL + poster} alt="Poster" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {category}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              <DateCardComponent
                date={DateTime.fromFormat(date, "dd/MM/yyyy")}
                time={time}
              ></DateCardComponent>
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Text>
            Desde {prices.general} COP a {prices.vip} COP
          </Text>

          <Box display="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
      {showInfo ? (
        <Button rightIcon={<IoTicketOutline />}>RESERVA YA</Button>
      ) : (
        <></>
      )}
    </Box>
  );
}
export default InfoCardComponent;
