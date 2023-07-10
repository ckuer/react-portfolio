import React from "react";
import "./Main.css";
import ck from "../img/christina-kuerner.jpg";

const Main = () => {
    return (
        <main>
            <section id="about">
                <div class="section-container">
                    <img class="section-img" src={ck} alt="Christina Kuerner"/>
                    <div class="section-text">
                        <h1>About</h1>
                        <p>I am a <span class="color1">web development</span> student at Wake Technical Community College in Raleigh, NC. I've been picking up skills like <span class="color2">HTML, CSS, JavaScript, and more</span> since 2021 and have a natural eye for writing, grammar, and design. I place importance on writing <span class="color3">clean, semantic code</span> that produces clean, functional websites.</p>
                    </div>
                </div>
            </section>
    
            <section id="projects">
                <div class="section-container">
                    <div class="section-text">
                        <h1>Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </section>
    
            <section id="skills">
                <div class="section-container">
                    <div class="section-text">
                        <h1>Skills</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </section>
    
            <section id="experience">
                <div class="section-container">
                    <div class="section-text">
                        <h1>Experience</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;