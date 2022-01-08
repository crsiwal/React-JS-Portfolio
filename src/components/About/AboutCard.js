import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowReturnRight } from 'react-icons/bs';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{ fontSize: "1.1em" }}>
        <p style={{ textAlign: "justify" }}>
          I fell in love with programming and I have at least learned something, I think… 🤷‍♂️
        </p>
        <p style={{ textAlign: "left" }}>
          I'm a villager from <span className="purple"> Hapur, Uttar Pradesh, India.</span>&nbsp;
          Currently, I’ve had the privilege of working as a senior software engineer at AdGyde, MoMagic Noida.
          Previously worked with Bailiwick Solution, GoNutrio, and NMSS Technologies.
        </p>

        <p style={{ textAlign: "justify" }}>
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
        </p>
      </Card.Body>
    </Card >
  );
}

export default AboutCard;
