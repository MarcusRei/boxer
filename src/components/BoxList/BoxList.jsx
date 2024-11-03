import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./BoxList.css";

export const BoxList = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const items = ["Airfryer", "Böcker", "Stekspade", "Kökskniv"];

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
    <Row data-bs-theme="dark" className="box-list">
      <Col>
        <ListGroup>
          {items.map((item) => {
            return (
              <ListGroup.Item className="box-list-item">
                <div>{item}</div>
                <div className="box-list-spacer"></div>
                <CloseButton />
              </ListGroup.Item>
            );
          })}

          <ListGroup.Item
            variant="success"
            action
            onClick={handleShow}
            className="box-list-item"
          >
            <div>
              <i class="fa-solid fa-plus"></i> Lägg till
            </div>
            <div className="box-list-spacer"></div>
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Modal show={show} onHide={handleClose} data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title>Lägg till en ny sak</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Vad är det för sak?</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Berätta vad det är för något..."
              />
              <Form.Control.Feedback type="invalid">
                Din kartong måste ha ett namn
              </Form.Control.Feedback>
              <Form.Control.Feedback>Bra jobbat!</Form.Control.Feedback>
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
