import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import {Frameworks} from "../components/FrameWorks";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing" id="about">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                        src="/assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50
                        md:inset-y-10 lg:scale-[2.5]"
                        alt="coding-pov"/>
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Gabriel COUDEL-KOUMBA</p>
                        <p className="subtext text-justify">
                            In the last two years, I’ve been on a journey of turning ideas into interactive digital
                            experiences. From experimenting with frontend designs that bring interfaces to life, to
                            building backend systems that keep everything running smoothly, I’ve learned to see code as
                            both a creative tool and a problem-solving craft. Through personal projects and school
                            collaborations, I’ve grown into a developer who loves blending logic with creativity to
                            shape applications that actually make an impact.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t
                    from-blackPearl to-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full"
                    >
                        <p className="flex items-end text-5xl text-gray-500">
                            Think. Code. Repeat.
                        </p>
                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text="GRASP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="SOLID"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                            text="Design Patterns"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                            text="Design Principles"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }}
                            text="SRP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "30deg", top: "70%", left: "70%" }}
                            image="assets/logos/csharp-pink.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            image="assets/logos/dotnet-pink.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                            image="assets/logos/blazor-pink.png"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">My Time Zone</p>
                        <p className="subtext">
                            I live in Aubière (63170) and willing to work remotely anywhere in the world.
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            If you want to get in touch
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headText">Teck Stack</p>
                        <p className="subtext">
                            I've learned a variety of languages, frameworks, and tools that
                            enable me to build robust applications
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
