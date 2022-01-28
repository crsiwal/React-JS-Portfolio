import React from "react";
import ProjectItem from "../ProjectItem";
import { mchamp_dashboard } from "../../Assets";
export default function MchampDashboard() {
    return (
        <ProjectItem
            img={mchamp_dashboard}
            title="An end-to-end contesting engagement platform in a gamified quiz format."
            link="https://www.mchamp.in?ref=rsiwal.com"
            status="active_web"
        />
    );
}