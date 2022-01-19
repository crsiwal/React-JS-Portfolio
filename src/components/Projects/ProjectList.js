import React from "react";
import Row from "react-bootstrap/Row";
import ProjectItem from "./ProjectItem";

import SegmentationDashboard from "./Listing/SegmentationDashboard";
import AdgydeDashboardV2 from "./Listing/AdgydeDashboardV2";
import AdgydeWebsiteV3 from "./Listing/AdgydeWebsiteV3";
import AdgydeReporting from "./Listing/AdgydeReporting";
import AdgydeDashboardV1 from "./Listing/AdgydeDashboardV1";
import AdgydeWebsiteV2 from "./Listing/AdgydeWebsiteV2";
import MchampDashboard from "./Listing/MchampDashboard";
import StoreCheq from "./Listing/StoreCheq";
import TripOffbeat from "./Listing/TripOffbeat";
import SwitchedOnKids from "./Listing/SwitchedOnKids";
import Gonutrio from "./Listing/Gonutrio";
import Vaibhogam from "./Listing/Vaibhogam";
import JioMessenger from "./Listing/JioMessenger";
import Comapere2Gain from "./Listing/Comapere2Gain";
export default function ProjectList() {
  return (
    <Row style={{ paddingBottom: "10px" }}>
      <SegmentationDashboard />
      <AdgydeDashboardV2 />
      <AdgydeWebsiteV3 />
      <AdgydeReporting />
      <AdgydeDashboardV1 />
      <AdgydeWebsiteV2 />
      <MchampDashboard />
      <StoreCheq />
      <TripOffbeat />
      <SwitchedOnKids />
      <Gonutrio />
      <Vaibhogam />
      <JioMessenger />
      <Comapere2Gain />
    </Row>
  );
}
