import React, { useRef, useState } from "react";
import "./Contact.scss";
import { MotionDiv, MotionForm, MotionH1 } from "../../utils/motionElements";
import ContactSvg from "../../assets/ContactSvg.jsx";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID } from "../../utils/constants.js";

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
  const formRef = useRef();
  const inView = useInView(contactRef, "100px");
  const [formError, setFormError] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        "ex_3xtFa2R0NK34Sd"
      )
      .then(
        (result) => {
          setFormError(false);
        },
        (error) => {
          setFormError(true);
        }
      );
  };

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
          <MotionH1 variants={contactVariant}>Lets Work Together</MotionH1>
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
            animate={
              inView && {
                opacity: 0,
                transition: {
                  delay: 2,
                  duration: 1,
                },
              }
            }
          >
            <ContactSvg inView={inView} />
          </MotionDiv>
          <MotionForm
            initial={{ opacity: 0 }}
            animate={
              inView && {
                opacity: 1,
                transition: {
                  delay: 3,
                  duration: 1,
                },
              }
            }
            style={{ position: "relative", zIndex: "1" }}
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input type="text" name="from_name" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="8" name="message"/>
            <button>Submit</button>
            {typeof formError === "boolean" &&
              (formError ? "Error" : "Success")}
          </MotionForm>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default Contact;
