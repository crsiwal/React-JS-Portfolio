import React from "react";
import ProjectItem from "../ProjectItem";
import { trip_off_beat } from "../../Assets";
export default function TripOffbeat() {
    return (
        <ProjectItem
            img={trip_off_beat}
            title="A travel agency that provides tourist place information and travel-related services."
            link="https://www.tripoffbeat.com?ref=rsiwal.com"
            status="active_web"
        />
    );
}