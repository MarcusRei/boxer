import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./UrlButton.css";

export const UrlButton = () => {
  const currentURL = window.location.href;
  const [hovering, setHovering] = useState(false);
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(currentURL);
    showCopiedMessage();
  }

  function showCopiedMessage() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1100);
  }

  return (
    <Row>
      <Col />
      <Col className="flex-center">
        <Button
          variant="info"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onClick={copyToClipboard}
        >
          <div className="keep-size flex-center">
            {hovering ? (
              <div>
                {copied === false ? (
                  <div className="not-copied">
                    Copy to clipboard <i class="fa-regular fa-copy"></i>
                  </div>
                ) : (
                  <div className="copied-message">Copied!</div>
                )}
              </div>
            ) : (
              `The current URL: ${currentURL}`
            )}
          </div>
        </Button>
      </Col>
      <Col />
    </Row>
  );
};
