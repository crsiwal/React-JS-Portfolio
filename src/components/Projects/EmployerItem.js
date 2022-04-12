import React from "react";
import Col from "react-bootstrap/Col";

export default function EmployerItem(props) {
  return (
    <Col xs={4} md={2} className="tech-icons border-0 shadow-none">
      <img
        style={{ maxHeight: "70px" }}
        src={props.logo}
        className="img-fluid"
        alt={props.alt}
        title={props.alt}
      />
    </Col>
  );
}
