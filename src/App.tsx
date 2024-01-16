import { Grid } from "@chakra-ui/react";
import "./App.css";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <Grid templateColumns='1fr 2fr' columnGap={16} height='100%' width='100%' paddingTop={16}>
      <Sidebar />
      <Content />
    </Grid>
  );
}

export default App;
