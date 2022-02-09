import React, { useState } from "react";
import { Button, Flex, Wrap, Divider, Box, Center } from "@chakra-ui/react";
import "./SeatsComponent.css";

function SeatsComponent({ props, palcoA, palcoB }) {
  const [active, setActive] = useState([]);

  const handleActive = (e, p) => {
    const buttonId = parseInt(e.target.id);
    console.log(p);
    if (active.includes(buttonId)) {
      setActive(active.filter((a) => a !== buttonId));
    } else {
      setActive([...active, buttonId]);
    }
  };
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
        Escenario
      </Box>
      <Center height="20px">
        <Divider orientation="vertical" />
      </Center>
      <Wrap>
        <Flex w="100%" justify={"center"}>
          <Box maxW={"120px"}>
            <Wrap spacing="5px">
              {palcoA.map((s, idx) => (
                <Button
                  key={idx}
                  id={s.id}
                  colorScheme="blue"
                  isDisabled={s.isReserved}
                  className={`seats ${
                    active.includes(s.id) ? "active" : "inactive"
                  }`}
                  onClick={(e) => handleActive(e, s)}
                ></Button>
              ))}
            </Wrap>
          </Box>
        </Flex>
        <Flex w="100%" justify={"center"}>
          <Box maxW={"250px"}>
            <Wrap spacing="5px">
              {palcoB.map((s, idx) => (
                <Button
                  key={idx}
                  id={s.id}
                  colorScheme="blue"
                  isDisabled={s.isReserved}
                  className={`seats ${
                    active.includes(s.id) ? "active" : "inactive"
                  }`}
                  onClick={(e) => handleActive(e)}
                ></Button>
              ))}
            </Wrap>
          </Box>
        </Flex>
      </Wrap>
    </>
  );
}

export default SeatsComponent;
