import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div id="header-container">
            <header>
                <h1>Christina Kuerner</h1>
                <h2>aspiring full-stack <span class="lightyellow">web developer</span><span id="blink-span">&#9144;</span></h2>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;