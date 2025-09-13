import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import React from "react";

const Experiences = () => {
    return (
        <div className="w-full" id="work">
            <div className="c-space section-spacing" id="experiences">
                <h2 className="text-heading">Experiences</h2>
                    <Timeline data={experiences} />
            </div>
        </div>
    );
};

export default Experiences;