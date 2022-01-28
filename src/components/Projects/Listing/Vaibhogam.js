import React from "react";
import ProjectItem from "../ProjectItem";
import { vaibhogam_banner } from "../../Assets";
export default function Vaibhogam() {
    return (
        <ProjectItem
            img={vaibhogam_banner}
            title="An Indian online matrimonial service platform for public users."
            link="http://www.vaibhogam.com?ref=rsiwal.com"
            status="shutdown"
            shutdownYear={2018}
        />
    );
}