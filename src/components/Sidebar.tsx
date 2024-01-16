import { GridItem } from "@chakra-ui/react";
import profilePic from "../assets/profile-pic.jpeg";

export function Sidebar() {
  return (
    <GridItem>
      <h1>Mandy Tadros</h1>
      <img src={profilePic} className="logo" alt="Mandy Tadros" />
    </GridItem>
  );
}
