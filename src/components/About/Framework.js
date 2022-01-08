import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJquery,
  SiWordpress,
  SiBootstrap,
  SiTailwindcss,
  SiWoocommerce,
  SiBlogger,
  SiNextdotjs,
} from "react-icons/si";
import {
  DiJqueryUiLogo,
  DiReact,
  DiCodeigniter,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={3} className="tech-icons">
        <DiCodeigniter />
        <p className="techstackdesc">Codeigniter</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
        <p className="techstackdesc">React</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiNextdotjs />
        <p className="techstackdesc">Next Js</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiWordpress />
        <p className="techstackdesc">WordPress</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiJquery />
        <p className="techstackdesc">Jquery</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiJqueryUiLogo />
        <p className="techstackdesc">Jquery UI</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiBootstrap />
        <p className="techstackdesc">BootStrap</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiTailwindcss />
        <p className="techstackdesc">Tailwindcss</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiWoocommerce />
        <p className="techstackdesc">Woo Com..</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiBlogger />
        <p className="techstackdesc">Blogger</p>
      </Col>

    </Row>
  );
}

export default Techstack;
