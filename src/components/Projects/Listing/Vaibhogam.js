import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function Vaibhogam() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="An Indian online matrimonial service platform for public users."
            link="http://www.vaibhogam.com?ref=rsiwal.com"
            status="shutdown"
            shutdownYear={2018}
        />
    );
}