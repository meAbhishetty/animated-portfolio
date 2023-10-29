import React, { useRef } from "react";
import "./Parallax.scss";
import { MotionDiv, MotionH1 } from "../../utils/motionElements";
import { useScroll, useTransform } from "framer-motion";
import sun from "../../assets/sun.png";
import planets from "../../assets/planets.png";

const Parallax = ({ type }) => {
    const scrollRef = useRef();
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end start"],
    });
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yPlanet = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    return (
        <div
            className="parallax"
            ref={scrollRef}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <MotionH1 style={{ y: yText }}>
                {type === "services" ? "What we Do" : "What We Did"}
            </MotionH1>
            <div className="parallax-mountains"></div>
            <MotionDiv
                className="parallax-planets"
                style={{ y: yPlanet,backgroundImage: `url(${
                    type === "services" ? planets : sun
                })`, }}
            ></MotionDiv>
            <MotionDiv
                className="parallax-stars"
                style={{
                    x: xStars,
                }}
            ></MotionDiv>
        </div>
    );
};

export default Parallax;
