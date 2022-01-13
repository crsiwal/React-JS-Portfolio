import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  const isMobile = window.innerWidth <= 500;
  return (
    <section>
      <Container fluid className="home-section" id="contact">
        <Container className="home-content">
          <Row>Contact</Row>
        </Container>
      </Container>
    </section>
  );
}
