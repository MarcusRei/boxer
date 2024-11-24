import QRCode from "qrcode";
import { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";

export const QrCode = () => {
  const currentURL = window.location.href;
  const canvasRef = useRef(null);

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, currentURL, function (error) {
      if (error) console.error(error);
      console.log("success!");
    });
  });

  return (
    <Row>
      <Col />
      <Col className="flex-center">
        <h6>This is your Box QR Code</h6>
        <canvas className="round-corners" id="canvas" ref={canvasRef}></canvas>
      </Col>
      <Col />
    </Row>
  );
};
