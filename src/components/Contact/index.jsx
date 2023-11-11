import React, { useRef } from "react";
import "./Contact.scss";
import { MotionDiv, MotionForm, MotionH1 } from "../../utils/motionElements";
import ContactSvg from "../../assets/ContactSvg.jsx";
import { useInView } from "framer-motion";

const contactVariant = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};
const Contact = () => {
    const contactRef = useRef();
    const inView = useInView(contactRef, "100px");
    return (
        <div className="contact">
        <MotionDiv
            className="contact-container"
            variants={contactVariant}
            initial="initial"
            whileInView="animate"
            ref={contactRef}
        >
            <MotionDiv className="contact-text" variants={contactVariant}>
                <MotionH1 variants={contactVariant}>
                    Lets Work Together
                </MotionH1>
                <MotionDiv className="item" variants={contactVariant}>
                    <h2>Mail</h2>
                    <span>react@hello.com</span>
                </MotionDiv>
                <MotionDiv className="item" variants={contactVariant}>
                    <h2>Address</h2>
                    <span>Sirsi, Karnataka</span>
                </MotionDiv>
                <MotionDiv className="item" variants={contactVariant}>
                    <h2>Phone</h2>
                    <span>+91 9876543210</span>
                </MotionDiv>
            </MotionDiv>
            <MotionDiv className="contact-form" variants={contactVariant}>
                <MotionDiv
                    className="contact-svg"
                    initial={{ opacity: 1 }}
                    animate={inView &&{
                        opacity: 0,
                        transition: {
                            delay: 2,
                            duration: 1,
                        },
                    }}
                >
                    <ContactSvg inView={inView} />
                </MotionDiv>
                <MotionForm
                    initial={{ opacity: 0 }}
                    animate={inView &&{
                        opacity: 1,
                        transition: {
                            delay: 3,
                            duration: 1,
                        },
                    }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" rows="8" />
                    <button>Submit</button>
                </MotionForm>
            </MotionDiv>
        </MotionDiv>
        </div>
    );
};

export default Contact;
