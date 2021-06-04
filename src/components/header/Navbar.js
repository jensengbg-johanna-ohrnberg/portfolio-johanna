import React, { useState } from 'react';
import "../header/navbar.css";
import { HiCode } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { FiX } from "react-icons/fi";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    const closeMenu = () => {
        setNavbarOpen(false);
    };

    return (
        <header className="header">
            <HiCode size={42} className="logo" />
            <button className="menu-btn" type="button" onClick={handleToggle}>
                {navbarOpen ? (
                    <FiX style={{ color: "rgb(0, 183, 255)", width: "40px", height: "40px" }} />
                ) : (
                    <CgMenuGridO style={{ color: "rgb(0, 183, 255)", width: "40px", height: "40px" }} />
                )}
            </button>
            <nav className={`nav-links ${navbarOpen ? " showMenu" : ""}`}>
                <a href="#techniques" onClick={() => closeMenu()}>TECHNIQUES</a>
                <a href="#portfolio" onClick={() => closeMenu()}>PORTFOLIO</a>
                <a href="#resume" onClick={() => closeMenu()}>RESUME</a>
                <a href="#contact" onClick={() => closeMenu()}>CONTACT</a>
            </nav>
        </header>
    )
}
