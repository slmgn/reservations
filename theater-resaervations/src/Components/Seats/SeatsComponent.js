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
} from "@chakra-ui/react";
import "./SeatsComponent.css";
import BookingDescriptionComponent from "../Booking/BookingDescriptionComponent";
import ModalReservComponent from "../ModalReserv/ModalReservComponent";

import { IoTicketOutline } from "react-icons/io5";
import { CgUnavailable } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { vip, general } from "./props";

function SeatsComponent(props) {
  const [seats, setSeats] = useState([]);
  const [detail, setDetail] = useState([]);
  const { data } = props;
  const [active, setActive] = useState([]);
  const [isOpenModalReserv, setIsOpenModalReserv] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setDetail(getDetail());
  }, [seats]);

  useEffect(() => {
    isReserved();
  });

  const isReserved = () => {
    const bookedList = JSON.parse(localStorage.getItem("Booked")) || [
      { isShow: "", seats: [] },
    ];

    const aux = bookedList.filter((item) => item.idShow === data.id);

    if (aux !== undefined && aux.length > 0) {
      vip.filter((item) => (item.isReserved = aux[0].seats.includes(item.id)));
      general.filter(
        (item) => (item.isReserved = aux[0].seats.includes(item.id))
      );
    } else {
      vip.filter((item) => (item.isReserved = false));
      general.filter((item) => (item.isReserved = false));
    }
  };

  const handleActive = (e) => {
    const buttonId = parseInt(e.target.id);

    if (active.includes(buttonId)) {
      setActive(active.filter((a) => a !== buttonId));
      setSeats(seats.filter((item) => item !== buttonId));
    } else {
      setActive([...active, buttonId]);
      setSeats((seats) => [...seats, buttonId]);
    }
  };

  const booking = () => {
    setIsOpenModalReserv(true);
    const user = JSON.parse(localStorage.getItem("usuario")).id;
    const arr = JSON.parse(localStorage.getItem("UserBooking")) || [];

    if (arr.length > 0) {
      const aux = JSON.parse(localStorage.getItem("UserBooking")).filter(
        (i) => i.idShow === data.id && i.user === user
      );
      if (aux.length > 0) {
        const arr = JSON.parse(localStorage.getItem("UserBooking")).filter(
          (i) => i.user !== user
        );
        aux[0].seats = seats;
        arr.push(aux[0]);
        localStorage.setItem("UserBooking", JSON.stringify(arr));
      } else {
        arr.push({ idShow: data.id, user: user, seats: seats });
        localStorage.setItem("UserBooking", JSON.stringify(arr));
      }
    } else {
      arr.push({ idShow: data.id, user: user, seats: seats });
      localStorage.setItem("UserBooking", JSON.stringify(arr));
    }
    reserv();
  };

  const reserv = () => {
    const show = JSON.parse(localStorage.getItem("Booked")) || [];

    if (show.length > 0) {
      const aux = JSON.parse(localStorage.getItem("Booked")).filter(
        (i) => i.idShow === data.id
      );
      if (aux.length > 0) {
        aux[0].seats = seats.concat(aux[0].seats);
        localStorage.setItem("Booked", JSON.stringify(aux));
      } else {
        const x = { idShow: data.id, seats: seats };
        show.push(x);
        localStorage.setItem("Booked", JSON.stringify(show));
      }
    } else {
      const obj = [{ idShow: data.id, seats: seats }];
      localStorage.setItem("Booked", JSON.stringify(obj));
    }
  };

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

  return (
    <Box>
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
                        onClick={(e) => handleActive(e)}
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
                onClick={() => booking()}
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
      <ModalReservComponent
        titulo="Reserva"
        descripcion="Felicidades sus asientos han sido asignados"
        isOpen={isOpenModalReserv}
        footerButtonText="Ir al home"
        onClose={() => navigate("../../")}
      ></ModalReservComponent>
    </Box>
  );
}

export default SeatsComponent;
