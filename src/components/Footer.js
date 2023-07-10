import React from "react";
import "./Footer.css";


const Footer = () => {
    return(
        <footer>
            <h1>Find me on</h1>
            <div id="social-links">
                <a href="https://github.com/ckuer" target="_blank" rel="noreferrer">
                    <i class="social-icon fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <i class="social-icon fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    );
};

export default Footer;