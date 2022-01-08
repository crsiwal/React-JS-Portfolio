import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Github from "./Github";
import Languages from "./Languages";
import Framework from "./Framework";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import PersonalImg from "../../Assets/personal.jpg";
import Toolstack from "./Toolstack";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Platforms from "./Platforms";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <AboutMe />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>


        <h1 style={{ fontSize: "2.1em" }}>
          Myself as a <strong className="purple">Programmer</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={3} style={{ marginTop: "2em" }}>
            <Tilt>
              <img src={PersonalImg} className="img-thumbnail" alt="Rahul Siwal" />
            </Tilt>
          </Col>
          <Col md={8}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>


        <h1 className="project-heading">
          Education <strong className="purple">Qualification</strong>
        </h1>
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
