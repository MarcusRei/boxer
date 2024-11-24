import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { QrCode } from "../QrCode/QrCode";
import { UrlButton } from "../UrlButton/UrlButton";
import "./CodeSection.css";

export const CodeSection = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const options = [
    { name: "URL", value: "2" },
    { name: "QR", value: "1" },
  ];
  return (
    <Row>
      <Col />
      <Col className="flex-center">
        <ButtonGroup>
          {options.map((option, index) => (
            <ToggleButton
              key={index}
              id={`radio-${index}`}
              type="radio"
              /* variant={index % 2 ? "outline-success" : "outline-danger"} */
              variant={"outline-success"}
              name="radio"
              value={option.value}
              checked={radioValue === option.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {option.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <Col className="fixed-height flex-center">
          {radioValue === "1" ? <QrCode /> : <UrlButton />}
        </Col>
      </Col>
      <Col />
    </Row>
  );
};
