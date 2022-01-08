import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiPostman,
  SiGooglecloud,
  SiBitbucket,
  SiTrello,
  SiWikimediacommons,
  SiEclipseide,
} from "react-icons/si";
import {
  DiNetbeans
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <DiNetbeans />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiEclipseide />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiGithub />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiBitbucket />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiPostman />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiTrello />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiWikimediacommons />
      </Col>

    </Row>
  );
}

export default Toolstack;
