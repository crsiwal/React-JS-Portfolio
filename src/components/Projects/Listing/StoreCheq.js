import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function StoreCheq() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="The digital currency of gifting for mobile-enabled users in the digital world."
            link="https://www.storecheq.com?ref=rsiwal.com"
            status="active_web"
        />
    );
}