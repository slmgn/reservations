import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { IoTicketOutline } from "react-icons/io5";
import DateCardComponent from "../DateCard/DateCardComponent";
import { DateTime } from "luxon";

function InfoCardComponent(props) {
  const showInfo = localStorage.length > 0;

  const { category, title, description, poster, dates } = props;
  const { date, time } = dates[0];

  return (
    <Box>
      <Image src={process.env.PUBLIC_URL + poster}></Image>
      <Heading>{category}</Heading>
      <Heading>{title}</Heading>
      <Heading>{description}</Heading>
      <DateCardComponent
        date={DateTime.fromFormat(date, "dd/MM/yyyy")}
        time={time}
      ></DateCardComponent>
      {showInfo ? (
        <Button rightIcon={<IoTicketOutline />}>RESERVA YA</Button>
      ) : (
        <></>
      )}
    </Box>
  );
}
export default InfoCardComponent;
