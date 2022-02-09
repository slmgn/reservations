import { Text } from "@chakra-ui/react";
import HeaderComponent from "../Components/Header/HeaderComponent";
import { useParams } from "react-router-dom";

function BookingPage() {
  const { email } = useParams();
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Text>Booking Page</Text>
      <Text>{email}</Text>
    </>
  );
}

export default BookingPage;
