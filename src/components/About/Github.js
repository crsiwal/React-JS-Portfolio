import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  const isMobile = window.innerWidth <= 500;
  let colourTheme = {
    background: "transparent",
    text: "#00343d",
    grade0: "#e9edfb",
    grade1: "#a8b8f0",
    grade2: "#7d94e8",
    grade3: "#5271e0",
    grade4: "#264cd7",
  };
  if (isMobile) {
    colourTheme.grade0 = "#e7fef8";
    colourTheme.grade1 = "#b6fbe9";
    colourTheme.grade2 = "#86f9da";
    colourTheme.grade3 = "#55f6cb";
    colourTheme.grade4 = "#0bd8a2";
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col xs={12}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Github <strong className="purple">Contribution</strong>
        </h1>
      </Col>

      <Col xs={12}>
        <GitHubCalendar
          username="crsiwal"
          blockSize={15}
          blockMargin={2}
          theme={colourTheme}
          fontSize={16}
        />
      </Col>
    </Row>
  );
}

export default Github;
