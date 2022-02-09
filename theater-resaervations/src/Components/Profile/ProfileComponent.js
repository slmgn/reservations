import { Avatar, Box, Text } from "@chakra-ui/react";

function ProfileComponent(props) {
  const { name, photo } = props;
  return (
    <Box>
      <Avatar name="Oshigaki Kisame" src={photo} />
      <Text>{name}</Text>
    </Box>
  );
}
export default ProfileComponent;
