import React from "react";
import "./Hero.scss";
import hero from "../../assets/hero.png";
import scrollIcon from "../../assets/scroll.png";
import {
    MotionDiv,
    MotionH1,
    MotionH2,
    MotionImg,
} from "../../utils/motionElements";
import IntroPicture from "./IntroPicture";

const textVariant = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollIcon: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const slidingVariant = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-500%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text-wrapper">
                <MotionDiv
                    className="hero-text-container"
                    variants={textVariant}
                    initial="initial"
                    animate="animate"
                >
                    <MotionH2 variants={textVariant}>Abhishek Nagaraj</MotionH2>
                    <MotionH1 variants={textVariant}>Web Developer</MotionH1>
                    <MotionDiv variants={textVariant} className="hero-btns">
                        <button>See the Latest Works</button>
                        <button>Contact Me</button>
                    </MotionDiv>
                    <MotionImg
                        variants={textVariant}
                        animate="scrollIcon"
                        src={scrollIcon}
                        alt="scroll"
                        className="hero-scroll"
                    />
                </MotionDiv>
            </div>
            <MotionDiv
                className="hero-sliding-container"
                variants={slidingVariant}
                initial="initial"
                animate="animate"
            >
                Developer Learner Explorer
            </MotionDiv>
            <div className="hero-img-container">
                {/* <img src={hero} alt="" className="hero-img" /> */}
                <IntroPicture  className="hero-img"/>
            </div>
        </div>
    );
};

export default Hero;
