import React, { useState, useEffect } from 'react';
import './Nav.css'


const Nav = () => {
    return (
        <nav className="Navbar">
            <h2>ASK</h2>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contacts">Contact</a>
                </li>
            </ul>
        </nav>

    )
};

export default Nav;