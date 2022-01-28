import React from "react";
import ProjectItem from "../ProjectItem";
import { segmentation_dashboard } from "../../Assets";
export default function SegmentationDashboard() {
    return (
        <ProjectItem
            img={segmentation_dashboard}
            title="Integrated dashboard for data segmentation and user notifications of a specific campaign."
            link="https://segments.truenotify.in?ref=rsiwal.com"
            status="active_web"
        />
    );
}