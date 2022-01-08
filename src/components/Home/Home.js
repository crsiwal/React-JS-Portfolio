import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import IntroDesktop from "./IntroBlockDesktop.js";
import IntroMobile from "./IntroBlockMobile.js";
import Type from "./Type";

function Home() {
  const isMobile = window.innerWidth <= 500;
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            {isMobile ?
              <Col md={7} className="home-header">
                <h1 className="heading-name">
                  RAHUL <strong className="main-name">SIWAL</strong>
                </h1>
                <div style={{ paddingLeft: 50, fontSize: 25 }}>Sr Software Engineer</div>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              :
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15, paddingLeft: 50, fontSize: 70 }}>
                  Rahul <strong className="main-name">Siwal</strong>
                </h1>
                <div style={{ paddingLeft: 50, fontSize: 25 }}>Sr Software Engineer</div>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
            }
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      {isMobile ? <IntroMobile /> : <IntroDesktop />}
    </section>
  );
}

export default Home;
