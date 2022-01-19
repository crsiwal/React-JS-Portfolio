import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function AdgydeDashboardV2() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="A client application dashboard developed in Php and Joomla for Real-time attribution and tracking tool."
            link="https://cnn.adgyde.com?ref=rsiwal.com"
            status="shutdown"
            shutdownYear={2020}
        />
    );
}