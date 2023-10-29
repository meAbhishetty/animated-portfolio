import React from "react";
import "./Services.scss";
import { MotionB, MotionDiv } from "../../utils/motionElements";
import people from "../../assets/people.webp";
const SERVICES = [
    {
        title: "Branding",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Nisi, non quod quasi, aperiam facere consequuntur
    vel ea maxime eos ex quam ipsum exercitationem sequi
    nesciunt excepturi tenetur repudiandae! At, perferendis.`,
        btnText: "Go",
    },
    {
        title: "Branding",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Nisi, non quod quasi, aperiam facere consequuntur
    vel ea maxime eos ex quam ipsum exercitationem sequi
    nesciunt excepturi tenetur repudiandae! At, perferendis.`,
        btnText: "Go",
    },
    {
        title: "Branding",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Nisi, non quod quasi, aperiam facere consequuntur
    vel ea maxime eos ex quam ipsum exercitationem sequi
    nesciunt excepturi tenetur repudiandae! At, perferendis.`,
        btnText: "Go",
    },
    {
        title: "Branding",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Nisi, non quod quasi, aperiam facere consequuntur
    vel ea maxime eos ex quam ipsum exercitationem sequi
    nesciunt excepturi tenetur repudiandae! At, perferendis.`,
        btnText: "Go",
    },
];

const serviceVariant = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const Services = () => {
    return (
        <MotionDiv
            className="services"
            variants={serviceVariant}
            initial="initial"
            whileInView="animate"
        >
            <MotionDiv className="services-text-container">
                <p>
                    I focus on helping your brand grow <br />
                    and move forward
                </p>
                <hr />
            </MotionDiv>
            <MotionDiv className="services-title-container">
                <div className="services-title-content">
                    <img src={people} alt="people" />
                    <h1>
                        <MotionB whileHover={{ color: "orange" }}>
                            Unique
                        </MotionB>{" "}
                        Ideas
                    </h1>
                </div>
                <div className="services-title-content">
                    <h1>
                        <MotionB whileHover={{ color: "orange" }}>
                            For Your
                        </MotionB>{" "}
                        Business
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </MotionDiv>
            <div className="services-list-container">
                {SERVICES.map((service) => (
                    <MotionDiv
                        className="services-list-box"
                        whileHover={{
                            backgroundColor: "lightgray",
                            color: "black",
                        }}
                    >
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <button>{service.btnText}</button>
                    </MotionDiv>
                ))}
            </div>
        </MotionDiv>
    );
};

export default Services;
