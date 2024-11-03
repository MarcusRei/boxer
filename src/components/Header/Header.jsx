import { Col, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <Row className="header">
      <Col></Col>
      <Col>
        <h1 className="main-title debug-frame">Boxer</h1>
      </Col>
      <Col></Col>
    </Row>
  );
};
