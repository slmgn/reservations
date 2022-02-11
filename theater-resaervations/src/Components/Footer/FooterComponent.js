import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinMap,
  BsTelephone,
} from "react-icons/bs";

import { FiMail } from "react-icons/fi";

function FooterComponent() {
  return (
    <Box
      color="white"
      borderTop="2px"
      borderColor="orange.500"
      bg="gray.800"
      mt="20px"
    >
      <SimpleGrid minChildWidth="150px" column={3} spacing={10}>
        <Center>
          <Box p={4}>
            <Heading>Teatro Juarez</Heading>
            <HStack>
              <Icon as={BsPinMap} />
              <Text>
                Carrera 19, Calle 25, Barquisimeto 3001, Lara, Venezuela
              </Text>
            </HStack>
            <HStack>
              <Icon as={BsTelephone} />
              <Text>+58 251-2521618</Text>
            </HStack>
            <HStack>
              <Icon as={FiMail} />
              <Text>soporte@teatrojuarez.com</Text>
            </HStack>
          </Box>
        </Center>
        <Center>
          <Box p={4}>
            <Heading>SIGUENOS</Heading>
            <HStack>
              <Icon as={BsFacebook} />
              <Text>Teatro Juarez</Text>
            </HStack>
            <HStack>
              <Icon as={BsInstagram} />
              <Text>@Teatro_Juarez</Text>
            </HStack>
            <HStack>
              <Icon as={BsTwitter} />
              <Text>@TJuarez</Text>
            </HStack>
          </Box>
        </Center>
      </SimpleGrid>

      <Center>
        <Divider w="30%" />
      </Center>
      <Text color="orange.500" fontStyle="italic" textAlign="center">
        Creado por @slm_gn
      </Text>
    </Box>
  );
}
export default FooterComponent;
