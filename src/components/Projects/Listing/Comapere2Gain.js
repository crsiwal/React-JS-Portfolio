import React from "react";
import ProjectItem from "../ProjectItem";
import { adgyde_dashboard } from "../../Assets";
export default function Comapere2Gain() {
    return (
        <ProjectItem
            img={adgyde_dashboard}
            title="A price comparison portal that helps to get the best deals from the online stores Flipkart, Amazon."
            link="https://www.comapere2gain.com?ref=rsiwal.com"
            status="shutdown"
            shutdownYear={2018}
        />
    );
}