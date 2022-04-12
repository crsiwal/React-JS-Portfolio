import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import resumePdf from "../../Assets/pdf/RahulSiwal-Resume.pdf";

function ResumeNew() {
  const [thisYear, setThisYear] = useState();
  useEffect(() => {
    setThisYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Col xs={12} md={12} className="text-center">
            <div className="resume-title">DIGITAL CV</div>
            <div className="resume-desc">
              {thisYear - 2015}
              <span style={{ verticalAlign: "sub" }}>+</span> years experience
            </div>
            <div className="resume-exptime">2015 - {thisYear}</div>
            <Button
              className="resume-btn text-white rounded-pill pl-5 pr-5"
              variant="primary"
              href={resumePdf}
              target="_blank"
            >
              VIEW MY CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
