import React from "react";
import Container from "react-bootstrap/Container";
import BlogSummery from "./BlogSummery";
import BlogsList from "./BlogList";

export default function Contact() {
  return (
    <section>
      <Container fluid className="blog-section" id="blogs">
        <Container>
          <BlogSummery />
          <BlogsList />
        </Container>
      </Container>
    </section>
  );
}
