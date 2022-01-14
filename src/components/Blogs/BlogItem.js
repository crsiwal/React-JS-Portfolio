import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiChevronRight } from "react-icons/fi";

export default function BlogItem(props) {
  return (
    <Col xs={12} md={4} className="project-card mb-4">
      <Card className="project-card-view">
        <Card.Img
          style={{ minHeight: "250px", maxHeight: "270px" }}
          src={props.img}
          alt="Card image"
        />
        <Card.ImgOverlay style={{ opacity: 0 }}>
          <Card.Title style={{ fontSize: "22px" }}>{props.title}</Card.Title>
          <Button
            variant="outline-primary"
            className="text-white rounded-pill mt-3"
            style={{
              fontSize: "18px",
              height: "2.5em",
              padding: "0.45rem 1.2rem",
            }}
            href={props.link}
          >
            Read Post <FiChevronRight />
          </Button>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}
