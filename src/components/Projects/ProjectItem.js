import React from "react";
import { Col, Card } from "react-bootstrap";
import {
  VisitWebsite,
  InDevelopmentProject,
  ProjectShutdown,
} from "./ProjectItemActions";

export default function ProjectItem(props) {
  return (
    <Col xs={12} md={4} className="project-card mb-4">
      <Card className="project-card-view">
        <Card.Img
          style={{ minHeight: "250px", maxHeight: "270px" }}
          src={props.img}
          alt="Card image"
        />
        <Card.ImgOverlay style={{ opacity: 0 }}>
          <Card.Title style={{ fontSize: "22px" }}>{props.title}</Card.Title>
          {props.status === "active_web" ? (
            <VisitWebsite {...props} />
          ) : props.status === "dev_web" ? (
            <InDevelopmentProject {...props} />
          ) : props.status === "shutdown" ? (
            <ProjectShutdown {...props} />
          ) : (
            ""
          )}
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}
