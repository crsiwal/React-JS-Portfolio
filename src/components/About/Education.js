import React from "react";
import { Col, Row } from "react-bootstrap";
import { mspup, ccs, uptu } from "./../Assets";

export default function Education() {
  const isMobile = window.innerWidth <= 500;
  return (
    <>
      <h1 className="project-heading">
        Education <strong className="purple">Qualification</strong>
      </h1>
      <Row
        className="mt-5"
        style={{ justifyContent: "center", paddingBottom: "50px" }}
      >
        <Col
          xs={12}
          md={6}
          className={`${isMobile ? "tech-icons border-0 shadow-none" : ""}`}
        >
          <div className="d-flex justify-content-end">
            <div>
              <blockquote className="blockquote">
                <h4 className="purple" style={{ fontSize: "22px" }}>
                  Master of Computer Applications
                </h4>
                {!isMobile ? (
                  <p className="text-right" style={{ fontSize: "12px" }}>
                    Harcourt Butler Technical University, Kanpur
                  </p>
                ) : (
                  ""
                )}
                <footer className="blockquote-footer">
                  Uttar Pradesh Technical University
                </footer>
              </blockquote>
            </div>
            <div className="ml-5">
              <img
                style={{ maxHeight: "150px", maxWidth: "100px" }}
                src={uptu}
                className="img-thumbnail mb-3"
                alt="Uttar Pradesh Technical University"
              />
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className={`${isMobile ? "tech-icons border-0 shadow-none" : ""}`}
        >
          <div className="d-flex justify-content-end">
            <div>
              <blockquote className="blockquote">
                <h4 className="purple" style={{ fontSize: "20px" }}>
                  Bachelor of Computer Applications
                </h4>
                {!isMobile ? (
                  <p className="text-right" style={{ fontSize: "12px" }}>
                    Institute of Informatics & Management Sciences
                  </p>
                ) : (
                  ""
                )}
                <footer className="blockquote-footer">
                  Chaudhary Charan Singh University, Meerut
                </footer>
              </blockquote>
            </div>
            <div className="ml-5">
              <img
                style={{ maxHeight: "150px", maxWidth: "100px" }}
                src={ccs}
                className="img-thumbnail mb-3"
                alt="madhyamik shiksha parishad uttar pradesh"
              />
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className={`${isMobile ? "tech-icons border-0 shadow-none" : ""}`}
        >
          <div className="d-flex justify-content-end">
            <div>
              <blockquote className="blockquote">
                <h4 className="purple" style={{ fontSize: "22px" }}>
                  Senior Secondary School
                </h4>
                {!isMobile ? (
                  <p className="text-right" style={{ fontSize: "12px" }}>
                    T.S.S Inter College, Hapur
                  </p>
                ) : (
                  ""
                )}
                <footer className="blockquote-footer">
                  Uttar Pradesh Board
                </footer>
              </blockquote>
            </div>
            <div className="ml-5">
              <img
                style={{ maxHeight: "150px", maxWidth: "100px" }}
                src={mspup}
                className="img-thumbnail mb-3"
                alt="madhyamik shiksha parishad uttar pradesh"
              />
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className={`${isMobile ? "tech-icons border-0 shadow-none" : ""}`}
        >
          <div className="d-flex justify-content-end">
            <div>
              <blockquote className="blockquote">
                <h4 className="purple text-center" style={{ fontSize: "22px" }}>
                  Higher Secondary School
                </h4>
                {!isMobile ? (
                  <p className="text-right" style={{ fontSize: "12px" }}>
                    T.S.S Inter College, Hapur
                  </p>
                ) : (
                  ""
                )}
                <footer className="blockquote-footer">
                  Uttar Pradesh Board
                </footer>
              </blockquote>
            </div>
            <div className="ml-5">
              <img
                style={{ maxHeight: "150px", maxWidth: "100px" }}
                src={mspup}
                className="img-thumbnail mb-3"
                alt="madhyamik shiksha parishad uttar pradesh"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
