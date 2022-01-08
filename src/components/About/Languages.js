import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPhp,
  SiKaios,
  SiPython,
  SiJava,
  SiCplusplus,
} from "react-icons/si";
import {
  DiJavascript,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiGoogleCloudPlatform
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={3} className="tech-icons">
        <SiPhp />
        <p className="techstackdesc">PHP</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript />
        <p className="techstackdesc">Javascript</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiMysql />
        <p className="techstackdesc">MySQL</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiGoogleCloudPlatform />
        <p className="techstackdesc">BigQuery</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiHtml5 />
        <p className="techstackdesc">HTML 5</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiCss3 />
        <p className="techstackdesc">CSS 3</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiKaios />
        <p className="techstackdesc">Kai OS</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiPython />
        <p className="techstackdesc">Python</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiJava />
        <p className="techstackdesc">Core Java</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiCplusplus />
        <p className="techstackdesc">C & C++</p>
      </Col>

    </Row>
  );
}

export default Techstack;
