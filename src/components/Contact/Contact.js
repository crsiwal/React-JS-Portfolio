import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <Container fluid className="contact-section">
        <Row className="contact">
          <Col xs={12} md={12} className="text-center">
            <div className="contact-title">For Your Project</div>
            <div style={{ display: "none1" }} className="contact-action hide">
              Hire Me
            </div>
            <Button
              className="contact-btn text-white rounded-pill pl-5 pr-5"
              variant="primary"
              href="mailto:rahulsiwal62@gmail.com"
            >
              Write a email
            </Button>
            <div className="contact-mobile">
              <div className="contact-mobile-message">
                Or you can call me between 9 AM to 7 PM as per IST
              </div>
              <Button
                className="contact-mobile-number"
                variant="link"
                href="tel:+919634026262"
              >
                +919634026262
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
