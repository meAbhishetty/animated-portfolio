import React from "react";
import { MotionDiv, MotionLink } from "../../../utils/motionElements.js";
const variant = {
    open: {
        transition: {
            staggerDelay: 1,
            staggerChildren: 0.2,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const linkVariant = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};
const SidebarMenu = ({ className }) => {
    const menu = ["Home", "Services", "Portfolio", "Contact", "About"];
    return (
        <MotionDiv className={className} variants={variant}>
            {menu.map((item, i) => (
                <MotionLink
                    href={`#${item}`}
                    key={item}
                    variants={linkVariant}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {item}
                </MotionLink>
            ))}
        </MotionDiv>
    );
};

export default SidebarMenu;
