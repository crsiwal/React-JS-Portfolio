import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function JioMessenger() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="Kaios based multi chat application of Facebook, Whatsapp, Jio chat, and Native SMS"
            status="shutdown"
            shutdownYear={2018}
        />
    );
}