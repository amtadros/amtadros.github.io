import { Box, GridItem, Heading } from "@chakra-ui/react";
import profilePic from "../assets/profile-pic.jpeg";

export function Sidebar() {
  return (
    <GridItem>
      <Heading size="xl" textTransform="uppercase" textAlign="center">
        Mandy Tadros
      </Heading>
      <Box display="flex" justifyContent="center">
        <img src={profilePic} className="logo" alt="Mandy Tadros" />
      </Box>
    </GridItem>
  );
}
