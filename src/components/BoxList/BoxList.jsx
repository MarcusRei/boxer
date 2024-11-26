import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import "./BoxList.css";

export const BoxList = (props) => {
  const [show, setShow] = useState(false);
  /* const items = ["Kartong 1", "Kartong 2", "Kartong 3", "Kökskartong"]; */
  console.log("HEJ", props.boxes);

  const closeModal = () => setShow(false);
  const openModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShow(true);
  };
  const handleSubmit = (event) => {};

  const openBox = (item) => {
    item = item.toLowerCase();
    window.location.href = `/box/${item}`;
  };

  return (
    <Row data-bs-theme="dark" className="box-list">
      <Col>
        <ListGroup>
          {props.boxes.map((box) => {
            return (
              <ListGroup.Item
                action
                onClick={() => {
                  openBox(box);
                }}
                className="box-list-item"
              >
                <div>{box}</div>
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
