import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Wrap,
  Divider,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import "./SeatsComponent.css";
import BookingDescriptionComponent from "../Booking/BookingDescriptionComponent";

function SeatsComponent({ props, vip, general }) {
  const [active, setActive] = useState([]);
  const { show, seats } =
    localStorage.getItem("booked") === null
      ? localStorage.setItem("booked", JSON.stringify({ show: 0, seats: [] }))
      : JSON.parse(localStorage.getItem("booked"));

  const handleActive = (e, p) => {
    const buttonId = parseInt(e.target.id);
    seats.push(buttonId);
    const obj = { show: "titulo", seats: seats };
    localStorage.setItem("booked", JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem("booked")));
    if (active.includes(buttonId)) {
      setActive(active.filter((a) => a !== buttonId));
    } else {
      setActive([...active, buttonId]);
    }
  };
  const r = JSON.parse(localStorage.getItem("booked")).seats;
  useEffect(() => {
    console.log(vip);
    if (vip.length > 0) {
      console.log("Entro");
      const vipX = vip.forEach((element) => {
        if (r.includes(element.id)) {
          element.isReserved = true;
        }
      });
    }
  }, []);

  return (
    <>
      <Box
        bg="#dbdbdb"
        borderRadius={"54px 54px 2px 2px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx={"auto"}
        maxW="200px"
        h={"50"}
        className="scenario"
      >
        <Text fontWeight="bold">Escenario</Text>
      </Box>
      <Center height="20px">
        <Divider orientation="vertical" />
      </Center>
      <Wrap>
        <Flex w="100%" justify={"center"} bgColor="red.100" p={2}>
          <Box maxW={"120px"}>
            <Text textAlign={"center"} fontWeight="bold">
              V.I.P
            </Text>
            <Wrap spacing="5px">
              {vip.map((s, idx) => (
                <Button
                  key={idx}
                  id={s.id}
                  colorScheme="blue"
                  isDisabled={s.isReserved}
                  className={`seats ${
                    active.includes(s.id) ? "active" : "inactive"
                  }`}
                  onClick={(e) => handleActive(e, s)}
                >
                  {s.id}
                </Button>
              ))}
            </Wrap>
          </Box>
        </Flex>
        <Flex w="100%" justify={"center"} bgColor="gray.100" p={2}>
          <Box maxW={"250px"}>
            <Text textAlign={"center"} fontWeight="bold">
              GENERAL
            </Text>
            <Wrap spacing="5px">
              {general.map((s, idx) => (
                <Button
                  key={idx}
                  id={s.id}
                  colorScheme="blue"
                  isDisabled={s.isReserved}
                  className={`seats ${
                    active.includes(s.id) ? "active" : "inactive"
                  }`}
                  onClick={(e) => handleActive(e)}
                >
                  {s.id}
                </Button>
              ))}
            </Wrap>
          </Box>
        </Flex>
      </Wrap>
      <BookingDescriptionComponent></BookingDescriptionComponent>
    </>
  );
}

export default SeatsComponent;
