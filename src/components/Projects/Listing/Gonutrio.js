import React from "react";
import ProjectItem from "../ProjectItem";
import { gonutrio_community } from "../../Assets";
export default function Gonutrio() {
    return (
        <ProjectItem
            img={gonutrio_community}
            title="It’s an e-commerce portal for certified natural and organic products to live a healthy lifestyle."
            link="https://www.gonutrio.com?ref=rsiwal.com"
            status="shutdown"
            shutdownYear={2019}
        />
    );
}