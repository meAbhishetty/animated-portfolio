import React from "react";
import { MotionPath } from "../utils/motionElements";

const ContactSvg = ({ inView }) => {
    const style = {
        fill: "none",
        strokeWidth: 8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
    };
    return (
        <svg fill="#000000" width="100%" height="100%" viewBox="0 0 128 128">
            <g style={{ display: "none" }} id="Layer_1" />

            <g id="Layer_2">
                <MotionPath
                    initial={{ pathLength: 0 }}
                    animate={
                        inView && {
                            pathLength: 1,
                            transition: {
                                duration: 2,
                            },
                        }
                    }
                    style={style}
                    d="M20.1,40l38.1,31.5c3.3,2.8,8.2,2.8,11.5,0L107.9,40"
                />

                <MotionPath
                    initial={{ pathLength: 0 }}
                    animate={
                        inView && {
                            pathLength: 1,
                            transition: {
                                duration: 2,
                            },
                        }
                    }
                    style={style}
                    d="M107.9,85.6V36.1c0-2.1-1.7-3.7-3.7-3.7H23.9c-2.1,0-3.7,1.7-3.7,3.7v55.7c0,2.1,1.7,3.7,3.7,3.7h84"
                />
            </g>
        </svg>
    );
};

export default ContactSvg;
