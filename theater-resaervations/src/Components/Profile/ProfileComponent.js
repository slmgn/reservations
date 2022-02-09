import { Avatar, Box, Text } from "@chakra-ui/react";
import LogOutComponent from "../LogOut/LogOutComponent";

function ProfileComponent(props) {
  const { name, photo } = props;
  return (
    <Box>
      <Avatar name={name} src={process.env.PUBLIC_URL + photo} />
      <Text>{name}</Text>
    </Box>
  );
}
export default ProfileComponent;
