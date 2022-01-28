import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_website_v3 } from "../../Assets";
export default function AdgydeWebsiteV3() {
    return (
        <ProjectItem
            img={adgyde_website_v3}
            title="A redesigned website that shows the feature of the dashboard of Real-time attribution and tracking tool."
            link="https://www.adgyde.com?ref=rsiwal.com"
            status="active_web"
        />
    );
}