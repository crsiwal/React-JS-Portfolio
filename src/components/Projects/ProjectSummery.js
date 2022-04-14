import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { projectCover } from "../Assets";

export default function ProjectSummery() {
  const [thisYear, setThisYear] = useState(2022);
  useEffect(() => {
    setThisYear(new Date().getFullYear());
  }, []);

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
                More than {thisYear - 2015} years of programming experience that
                taught me to face challenging tasks and come out on top of it. I
                skilled ourselves in web development like Html, CSS, Javascript,
                Php, ReactJS, NextJs, ExpressJS, CodeIgniter, Jquery, eChartJS,
                Rest API, MySQL, Redis, Ajax, Bootstrap, Github, Bitbucket,
                Joomla, WordPress.
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
