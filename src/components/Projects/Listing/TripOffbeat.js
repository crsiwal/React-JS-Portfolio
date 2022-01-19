import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function TripOffbeat() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="A travel agency that provides tourist place information and travel-related services."
            link="https://www.tripoffbeat.com?ref=rsiwal.com"
            status="active_web"
        />
    );
}