import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function AdgydeWebsiteV3() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="A redesigned website that shows the feature of the dashboard of Real-time attribution and tracking tool."
            link="https://www.adgyde.com?ref=rsiwal.com"
            status="active_web"
        />
    );
}