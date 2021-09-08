import React, { useState, useEffect } from 'react';
import './Nav.css'






const Nav = () => {

    const [toggleState, setToggle] = useState("navbar-links inactive");

    const toggle = () => {
        toggleState == "navbar-links inactive" ? setToggle("navbar-links active") : setToggle("navbar-links inactive")
    }

    return (
        <div>
            <nav className="navbar">
                <div className="brand-title">Alexander Koszuta</div>
                <a onClick={() => toggle()} className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navbar-links" className={toggleState}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Nav;