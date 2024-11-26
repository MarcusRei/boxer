import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Container } from "react-bootstrap";

export const Layout = () => {
  return (
    <>
      <Container className="container" fluid="md">
        <Header></Header>
        <Outlet></Outlet>
      </Container>
    </>
  );
};
