import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function AdgydeReporting() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="A highly customized data reporting system for the Internal team, Clients, Partners, and Channels."
            status="active_web"
        />
    );
}