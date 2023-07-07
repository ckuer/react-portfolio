import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div id="header-container">
            <header>
                <h1>Title</h1>
                <h2>Subheading</h2>
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