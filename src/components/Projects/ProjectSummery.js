import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { projectCover } from "../Assets";

export default function ProjectSummery() {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote">
              <p style={{ textAlign: "justify" }}>
                From the start i have done some Blogger theme development,
                academic projects, developed projects for my organization also i
                do the research works like device fingerprinting. My
                organization also i do the research works like device
                fingerprinting.
              </p>
              <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
                “The best error message is the one that never shows up.”
              </p>
              <footer className="blockquote-footer">Thomas Fuchs</footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>
      <Col
        md={5}
        style={{ paddingTop: "10px", paddingBottom: "50px" }}
        className="about-img"
      >
        <img
          src={projectCover}
          alt="Rahul Siwal Projects"
          className="img-fluid"
        />
      </Col>
    </Row>
  );
}
