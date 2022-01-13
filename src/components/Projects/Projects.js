import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import ProjectSummery from "./ProjectSummery";
import Employers from "./Employers";
import {
  adGyde, bailiwick, gonutrio, nmss,
  adgyde_dashboard, irctc_push, adgyde_website, jio_messenger
} from "../Assets";

function Projects() {
  const isMobile = window.innerWidth <= 500;
  return (
    <Container fluid className="project-section">
      <Container>
        <ProjectSummery />
        <h1 className="project-heading">Career <strong className="purple">Journey</strong></h1>
        <Employers />
        <p style={{ color: "white" }}>Here are a few projects I've worked on.</p>
        <Row style={{ paddingBottom: "10px" }}>
          <Col xs={12} md={4} className="project-card">
            <ProjectItem
              img={adgyde_dashboard}
              title="AdGyde Dashboard"
              link="https://www.adgyde.com/login?ref=rsiwal.com"
            />
          </Col>

          <Col xs={12} md={4} className="project-card">
            <ProjectItem
              img={irctc_push}
              title="Push Dashboard Using Segments"
              link="https://segments.truenotify.in"
            />
          </Col>

          <Col xs={12} md={4} className="project-card">
            <ProjectItem
              img={adgyde_website}
              title="AdGyde Website"
              link="https://www.adgyde.com?ref=rsiwal.com"
            />
          </Col>

          <Col xs={12} md={4} className="project-card">
            <ProjectItem
              img={jio_messenger}
              title="Jio Feature Phone Messenger"
              description=""
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
