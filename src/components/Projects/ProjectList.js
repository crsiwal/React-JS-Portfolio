import React from "react";
import Row from "react-bootstrap/Row";
import ProjectItem from "./ProjectItem";
import {
  adgyde_dashboard,
  irctc_push,
  adgyde_website,
  jio_messenger,
} from "../Assets";

export default function ProjectList() {
  return (
    <Row style={{ paddingBottom: "10px" }}>
      <ProjectItem
        img={adgyde_dashboard}
        title="High-end, custom residential renovaters serving Fraser Valley homeowners."
        link="https://www.adgyde.com/login?ref=rsiwal.com"
        status="active_web"
      />

      <ProjectItem
        img={irctc_push}
        title="High-end, custom residential renovaters serving Fraser Valley homeowners."
        link="https://segments.truenotify.in"
        status="active_web"
      />

      <ProjectItem
        img={adgyde_website}
        title="High-end, custom residential renovaters serving Fraser Valley homeowners."
        link="https://www.adgyde.com?ref=rsiwal.com"
        status="dev_web"
      />

      <ProjectItem
        img={jio_messenger}
        title="High-end, custom residential renovaters serving Fraser Valley homeowners."
        status="shutdown"
        shutdownYear={2017}
      />
    </Row>
  );
}
