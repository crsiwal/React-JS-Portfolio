import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Languages from "./Languages";
import Framework from "./Framework";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Platforms from "./Platforms";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <AboutMe />
        <AboutCard />
        <Education />

        <h1 className="project-heading">
          Technologies <strong className="purple">Skillset </strong>
        </h1>

        <Row>
          <Col xs={12} md={6}>
            <Languages />
          </Col>
          <Col xs={12} md={6}>
            <Framework />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Hands-on</strong> Tools
        </h1>

        <Row>
          <Col xs={12} md={6}>
            <Platforms />
          </Col>
          <Col xs={12} md={6}>
            <Toolstack />
          </Col>
        </Row>

        <Github />

      </Container>
    </Container>
  );
}

export default About;
