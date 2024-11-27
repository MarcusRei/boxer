import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./NewBoxButton.css";

export const NewBoxButton = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Row className="button-bar">
      <Col></Col>
      <Col>
        <Button size="lg" onClick={handleShow}>
          Ny Kartong
        </Button>
      </Col>
      <Col></Col>

      <Modal show={show} onHide={handleClose} data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title>Skapa ny kartong</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Kartongnamn</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Skriv kartongens namn här..."
              />
              <Form.Control.Feedback type="invalid">
                Din kartong måste ha ett namn
              </Form.Control.Feedback>
              <Form.Control.Feedback>Bra namn!</Form.Control.Feedback>
              <Form.Text className="text-muted">
                Kom ihåg att namnet inte går att ändra när du väl skapat
                kartongen
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit" onClick={handleSubmit}>
              Skapa
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Avbryt
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};
