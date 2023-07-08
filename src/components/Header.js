import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div id="header-container">
            <header>
                <h1>Christina Kuerner</h1>
                <h2>aspiring front-end <span id="color-span">web developer</span><span id="blink-span">&#9144;</span></h2>
                <nav>
                    <a href="#top">Link One</a>
                    <a href="#top">Link Two</a>
                    <a href="#top">Link Three</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;