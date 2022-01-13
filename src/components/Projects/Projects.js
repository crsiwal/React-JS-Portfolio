import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import ProjectSummery from "./ProjectSummery";
import Employers from "./Employers";
import {
  adGyde,
  bailiwick,
  gonutrio,
  nmss,
  adgyde_dashboard,
  irctc_push,
  adgyde_website,
  jio_messenger,
} from "../Assets";

function Projects() {
  const isMobile = window.innerWidth <= 500;
  return (
    <Container fluid className="project-section">
      <Container>
        <ProjectSummery />
        <h1 className="project-heading">
          Career <strong className="purple">Journey</strong>
        </h1>
        <Employers />
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ paddingBottom: "10px" }}>
          <ProjectItem
            img={adgyde_dashboard}
            title="High-end, custom residential renovaters serving Fraser Valley homeowners."
            link="https://www.adgyde.com/login?ref=rsiwal.com"
            status="active_web"
          />

          <ProjectItem
            img={irctc_push}
            title="High-end, custom residential renovaters serving Fraser Valley homeowners."
            link="https://segments.truenotify.in"
            status="active_web"
          />

          <ProjectItem
            img={adgyde_website}
            title="High-end, custom residential renovaters serving Fraser Valley homeowners."
            link="https://www.adgyde.com?ref=rsiwal.com"
            status="dev_web"
          />

          <ProjectItem
            img={jio_messenger}
            title="High-end, custom residential renovaters serving Fraser Valley homeowners."
            status="shutdown"
            shutdownYear={2017}
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
