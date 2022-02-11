import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Wrap,
  Divider,
  Box,
  Center,
  Text,
  Stack,
  Square,
  HStack,
  Icon,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import "./SeatsComponent.css";
import BookingDescriptionComponent from "../Booking/BookingDescriptionComponent";

import { IoTicketOutline } from "react-icons/io5";
import { CgUnavailable } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function SeatsComponent(props) {
  const [seats, setSeats] = useState([]);
  const [detail, setDetail] = useState([]);
  const { data, vip, general } = props;
  const [active, setActive] = useState([]);
  const navigate = useNavigate();

  const handleActive = (e, p) => {
    const buttonId = parseInt(e.target.id);

    if (active.includes(buttonId)) {
      setActive(active.filter((a) => a !== buttonId));
      setSeats(seats.filter((item) => item !== buttonId));
    } else {
      setActive([...active, buttonId]);
      setSeats((seats) => [...seats, buttonId]);
    }
  };
  useEffect(() => {
    setDetail(getDetail());
  }, [seats]);

  const getDetail = () => {
    if (seats.length > 0) {
      const cantGeneral = seats.filter((item) => item > 10).length;
      const cantVip = seats.filter((item) => item < 11).length;
      const arr = [];
      const general = {
        cantidad: cantGeneral,
        descripcion: "GENERAL",
        precio: data.prices.general * cantGeneral,
      };
      arr.push(general);
      const vip = {
        cantidad: cantVip,
        descripcion: "V.I.P",
        precio: data.prices.vip * cantVip,
      };
      arr.push(vip);
      return arr.filter((item) => item.cantidad > 0);
    }
  };

  const navigateTo = () => {
    navigate("../../");
  };
  return (
    <Center>
      <Stack direction="row" p={4}>
        <Box>
          <HStack>
            <Square size="10px" bg="green" />
            <Text fontWeight="semibold">Seleccionada</Text>
          </HStack>
          <HStack>
            <Square size="10px" bg="#761818" />
            <Text fontWeight="semibold">Disponible</Text>
          </HStack>
          <HStack>
            <Icon as={CgUnavailable} />
            <Text fontWeight="semibold">No disponible</Text>
          </HStack>
        </Box>
        <Box>
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
          <Center>
            <Button
              _focus={{
                border: "1px solid orange",
              }}
              m={2}
              colorScheme="orange"
              rightIcon={<IoTicketOutline />}
              onClick={navigateTo}
              disabled={seats.length === 0}
            >
              Reservar
            </Button>
          </Center>
        </Box>
        <BookingDescriptionComponent
          detail={detail}
        ></BookingDescriptionComponent>
      </Stack>
    </Center>
  );
}

export default SeatsComponent;
