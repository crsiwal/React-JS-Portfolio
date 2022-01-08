import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  console.log(props.link);
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <p>{props.description}</p>
          <p>{props.note}</p>
          <p style={{ fontSize: ".9em" }}>{props.language}</p>
          <p style={{ fontSize: ".8em" }}>{props.tools}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div>{props.footer}</div>
        <div>
          {
            (props.link !== undefined && props.link != "") ?
              <Button variant="primary" href={props.link} target="_blank">
                View <BiLinkExternal />
              </Button> : ""
          }
        </div>
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
