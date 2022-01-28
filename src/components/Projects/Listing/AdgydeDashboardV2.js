import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard_v2 } from "../../Assets";

export default function AdgydeDashboardV2() {
    return (
        <ProjectItem
            img={adgyde_dashboard_v2}
            title="A lightweight Client and Partner dashboard that shows the data and configuration options of client applications."
            link="https://dashboard.adgyde.com?ref=rsiwal.com"
            status="active_web"
        />
    );
}
