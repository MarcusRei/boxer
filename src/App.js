import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { ButtonBar } from "./components/ButtonBar/ButtonBar";
import { BoxList } from "./components/BoxList/BoxList";
import { Header } from "./components/Header/Header";
import { SingleBox } from "./components/SingleBox/SingleBox";
import { CodeSection } from "./components/CodeSection/CodeSection";

function App() {
  return (
    <Container fluid="md">
      <Header></Header>

      <ButtonBar></ButtonBar>

      <CodeSection></CodeSection>

      <BoxList></BoxList>
      <SingleBox></SingleBox>
    </Container>
  );
}

export default App;
