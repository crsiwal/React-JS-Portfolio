import React from "react";
import ProjectItem from "../ProjectItem";
import { jio_messenger } from "../../Assets";
export default function JioMessenger() {
    return (
        <ProjectItem
            img={jio_messenger}
            title="Kaios based multi chat application of Facebook, Whatsapp, Jio chat, and Native SMS"
            status="shutdown"
            shutdownYear={2018}
        />
    );
}