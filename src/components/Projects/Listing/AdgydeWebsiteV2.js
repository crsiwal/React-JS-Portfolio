import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_website_v2 } from "../../Assets";
export default function AdgydeWebsiteV2() {
    return (
        <ProjectItem
            img={adgyde_website_v2}
            title="Real-time attribution and tracking tool dashboard feature visualization website developed in core Php."
            link="https://www.adgyde.com?ref=rsiwal.com"
            status="shutdown"
            shutdownYear={2020}
        />
    );
}