import {
  Box,
  Heading,
  Image,
  Text,
  Badge,
  Center,
  Icon,
  HStack,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { BsFillCalendarWeekFill, BsFillClockFill } from "react-icons/bs";

function ContentInfoComponent(props) {
  const { show } = props;
  console.log("a");
  return (
    <Center bg="gray.50">
      <Box>
        <Stack direction="row" p={4}>
          <Box p={2}>
            <Image
              src={process.env.PUBLIC_URL + show.poster}
              alt={show.title}
              maxH="300px"
              fallback={process.env.PUBLIC_URL + "/no_image.jpg"}
            />
          </Box>
          <Box maxWidth="600px">
            <Heading textAlign="center">{show.title}</Heading>
            <Text textAlign="justify">{show.description}</Text>
          </Box>
          <Center height="100px">
            <Divider orientation="vertical" />
          </Center>
          <Box>
            <HStack>
              <Icon as={BsFillCalendarWeekFill} />
              <Text>{show.date}</Text>
            </HStack>
            <HStack>
              <Icon as={BsFillClockFill} />
              <Text>{show.hour}</Text>
            </HStack>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {show.category}
            </Badge>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}

export default ContentInfoComponent;
