import React from "react";
import "./Navbar.scss";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import dribble from "../../assets/dribbble.png";
import Sidebar from "../Sidebar";
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="navbar-wrapper">
                <span className="navbar-name">Abhishek</span>
                <div className="social">
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#">
                        <img src={youtube} alt="" />
                    </a>
                    <a href="#">
                        <img src={dribble} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
