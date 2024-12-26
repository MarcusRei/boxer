import React, { useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { Button, Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import "./BoxList.css";
import { addToLS } from "../../services/LocalStorageService";

export const BoxList = (props) => {
  const [show, setShow] = useState(false);
  /* const navigate = useNavigate(); */

  const closeModal = () => setShow(false);
  const openModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShow(true);
  };
  const handleSubmit = (event) => {};

  const openBox = (box) => {
    console.log("vald box:", box);
    addToLS("box", box);
    /* navigate("/box/"); */
  };

  return (
    <Row data-bs-theme="dark" className="box-list">
      <Col>
        <ListGroup>
          {props.boxes === null ? (
            <Row>
              <Col className="flex-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Col>
            </Row>
          ) : props.boxes.length >= 0 ? (
            props.boxes.map((box, index) => {
              return (
                <ListGroup.Item
                  href="/box"
                  key={index}
                  action
                  onClick={() => {
                    openBox(box);
                  }}
                  className="box-list-item"
                >
                  <div>{box.title}</div>
                  <div className="box-list-spacer"></div>
                  <Button variant="outline-danger" onClick={openModal}>
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </ListGroup.Item>
              );
            })
          ) : (
            "There are no boxes available!"
          )}
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
