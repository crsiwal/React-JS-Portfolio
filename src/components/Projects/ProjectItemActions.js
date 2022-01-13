import React from "react";
import Button from "react-bootstrap/Button";
import { FiChevronRight, FiSunset } from "react-icons/fi";
import { VscTools } from "react-icons/vsc";

export function ProjectItemActions(props) {}
export function VisitWebsite() {
  return (
    <Button
      variant="outline-primary"
      className="text-white rounded-pill mt-3"
      style={{
        fontSize: "18px",
        height: "2.5em",
        padding: "0.45rem 1.2rem",
      }}
      href="#"
    >
      Visit Website <FiChevronRight />
    </Button>
  );
}

export function InDevelopmentProject(props) {
  return (
    <Button
      variant="outline-light"
      className="rounded-pill mt-3 border-0"
      style={{
        fontSize: "18px",
        height: "2.5em",
        padding: "0.45rem 1.2rem",
      }}
      disabled
    >
      <VscTools
        style={{ fontSize: "25px", marginRight: "5px", marginTop: "-5px" }}
      />
      {" In development"}
    </Button>
  );
}

export function ProjectShutdown(props) {
  return (
    <Button
      variant="outline-light"
      className="rounded-pill mt-3 border-0"
      style={{
        fontSize: "18px",
        height: "2.5em",
        padding: "0.45rem 1.2rem",
      }}
      disabled
    >
      <FiSunset
        style={{ fontSize: "25px", marginRight: "5px", marginTop: "-5px" }}
      />
      {" Shutdown in"} {props.shutdownYear}
    </Button>
  );
}
