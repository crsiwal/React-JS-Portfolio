import React from "react";
import Container from "react-bootstrap/Container";
import ContactSummery from "./ContactSummery";

export default function Contact() {
  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Container>
          <ContactSummery />
        </Container>
      </Container>
    </section>
  );
}
