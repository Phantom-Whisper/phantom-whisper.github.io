import { Timeline } from "../components/Timeline";
import { education } from "../constants";
import React from "react";

const Education = () => {
    return (
        <div className="w-full" id="work">
            <div className="c-space section-spacing" id="experiences">
                <h2 className="text-heading">Education</h2>
                    <Timeline data={education} />
            </div>
        </div>
    );
};

export default Education;