import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function MchampDashboard() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="An end-to-end contesting engagement platform in a gamified quiz format."
            link="https://www.mchamp.in?ref=rsiwal.com"
            status="active_web"
        />
    );
}