import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { PersonalImg } from "../Assets";
import { BsArrowReturnRight } from "react-icons/bs";

function AboutCard() {
  return (
    <>
      <h1 style={{ fontSize: "2.1em" }}>
        Myself as a <strong className="purple">Programmer</strong>
      </h1>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col md={3} style={{ marginTop: "2em" }}>
          <Tilt>
            <img
              src={PersonalImg}
              className="img-thumbnail"
              alt="Rahul Siwal"
            />
          </Tilt>
        </Col>
        <Col
          md={8}
          style={{
            justifyContent: "center",
            paddingTop: "0px",
            paddingBottom: "50px",
          }}
        >
          <Card className="quote-card-view">
            <Card.Body style={{ fontSize: "1.1em" }}>
              <p style={{ textAlign: "justify" }}>
                I fell in love with programming and I have at least learned
                something, I think… 🤷‍♂️
              </p>
              <p style={{ textAlign: "left" }}>
                I'm a villager from{" "}
                <span className="purple"> Hapur, Uttar Pradesh, India.</span>
                &nbsp; Currently, I’ve had the privilege of working as a senior
                software engineer at AdGyde, MoMagic Noida. Previously worked
                with Bailiwick Solution, GoNutrio, and NMSS Technologies.
              </p>

              <div style={{ textAlign: "justify" }}>
                Apart from programming, some other activities that I love!
                <ul style={{ paddingInlineStart: "15px" }}>
                  <li className="about-activity">
                    <BsArrowReturnRight /> Writting Tech Blogs
                  </li>
                  <li className="about-activity">
                    <BsArrowReturnRight /> Travelling
                  </li>
                  <li className="about-activity">
                    <BsArrowReturnRight /> Social Service
                  </li>
                </ul>
                <br />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AboutCard;
