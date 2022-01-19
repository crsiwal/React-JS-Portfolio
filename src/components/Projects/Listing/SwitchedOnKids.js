import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function SwitchedOnKids() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="It’s an Australia-based leading online store of educational toys for young adults."
            link="https://www.switchedonkids.com.au?ref=rsiwal.com"
            status="active_web"
        />
    );
}