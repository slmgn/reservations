import { Avatar, Box, Text, Center } from "@chakra-ui/react";
import LogOutComponent from "../LogOut/LogOutComponent";

function ProfileComponent(props) {
  const { name, photo } = props;
  return (
    <Box>
      <Center>
        <Avatar name={name} src={process.env.PUBLIC_URL + photo} />
        <Text fontWeight="medium" pl="5px" color="gray.900">
          {name}
        </Text>
        <LogOutComponent></LogOutComponent>
      </Center>
    </Box>
  );
}
export default ProfileComponent;
