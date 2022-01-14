import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { programmerIntro } from "../../components/Assets";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function IntroDesktop() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: "3.6em" }}>
              <b>
                Let <span className="purple"> me </span> Introduce
              </b>
            </h1>
          </Col>
          <Col md={4} className="myAvtar pt-4">
            <Tilt>
              <img src={programmerIntro} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description pt-0">
            <p className="home-about-body">
              I'm a software developer with a passion for programming. I like to
              analyze and solve problems efficiently and always work effectively
              with my team.
              <br />
              <br />I love <b>bugs</b> because it gives me a new experience
              every time.
              <span className="purple">
                &nbsp;App Attribution &amp; Analytics, e-commerce and Social
                Community
              </span>{" "}
              are my field of Interest's.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with Modern Programming Library and Frameworks like&nbsp;
              <i className="purple">
                React JS, Next JS, CodeIgniter and Tailwind CSS
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Get In Touch</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/crsiwal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rahulsiwal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rsiwal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.fb.com/rsiwal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
