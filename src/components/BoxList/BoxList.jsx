import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./BoxList.css";

export const BoxList = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const items = ["Kartong 1", "Kartong 2", "Kartong 3", "Kökskartong"];

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const openBox = () => {
    /* window.location.href = "/box"; */
  };

  return (
    <Row data-bs-theme="dark" className="box-list">
      <Col>
        <ListGroup>
          {items.map((item) => {
            return (
              <ListGroup.Item
                action
                onClick={openBox}
                className="box-list-item"
              >
                <div>{item}</div>
                <div className="box-list-spacer"></div>
                <Button variant="outline-danger" onClick={openModal}>
                  <i class="fa-solid fa-trash"></i>
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>

      <Modal show={show} onHide={closeModal} data-bs-theme="dark">
        <Modal.Header data-bs-theme="dark" closeButton>
          <Modal.Title data-bs-theme="dark" className="light-text">
            <h3 className="light-text">Ta bort kartong?</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body data-bs-theme="dark">
          <p className="light-text">
            Är du säker? Deta går inte att ångra detta.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={handleSubmit}>
            Ja, ta bort kartong
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};
