import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowReturnRight } from 'react-icons/bs';

export default function AboutMe() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote">
          <p style={{ textAlign: "justify" }}>
            Web is fun, I really enjoy creating things that live on the internet.
            My interest in web development started back in 2011 when I decided to try
            editing Blogger themes. A custom theme code of blog
            taught me a lot about XML, HTML & CSS!
          </p>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            “It's not a faith in technology. It's faith in people.”
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}