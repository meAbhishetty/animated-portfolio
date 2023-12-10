import React, { useState } from "react";
import "./Sidebar.scss";
import SideBarMenu from "./SidebarMenu/index.jsx"
import HamburgerButton from "./HamburgerButton/index.jsx";
import { MotionDiv } from "../../utils/motionElements";

const variant = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            clipPath: { type: "spring", stiffness: 20 },
        },
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            clipPath: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    },
};

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <MotionDiv
            className="sidebar"
            initial="closed"
            animate={open ? "open" : "closed"}
        >
            <MotionDiv className="sidebar-container" variants={variant}>
                <HamburgerButton
                    className="sidebar-btn"
                    open={open}
                    setOpen={setOpen}
                />
                <SideBarMenu className="sidebar-container-menu" />
                
            </MotionDiv>
        </MotionDiv>
    );
};

export default Sidebar;
