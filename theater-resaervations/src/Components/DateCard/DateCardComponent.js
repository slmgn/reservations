import { Box, Divider, Text } from "@chakra-ui/react";

function DateCardComponent(props) {
  const { date } = props;

  return (
    <Box bg="orange.500" color="white" w="120px" h="auto">
      <Text>{date.weekdayShort}</Text>
      <Text>
        {date.day}, {date.monthShort}
      </Text>
      <Divider orientation="horizontal" size="lg" />
      <Text>{date.year}</Text>
    </Box>
  );
}

export default DateCardComponent;
