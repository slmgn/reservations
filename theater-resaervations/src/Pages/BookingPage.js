import { Text } from "@chakra-ui/react";
import HeaderComponent from "../Components/Header/HeaderComponent";
import SeatsComponent from "../Components/Seats/SeatsComponent";
import { palcoA, palcoB } from "../Components/Seats/props";

function BookingPage() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Text>Booking Page</Text>
      <SeatsComponent palcoA={palcoA} palcoB={palcoB}></SeatsComponent>
    </>
  );
}

export default BookingPage;
