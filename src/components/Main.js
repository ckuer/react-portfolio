import React from "react";
import "./Main.css";
// image imports
import ck from "../img/christina-kuerner.jpg";
import web250project from "../img/web250project.png";
import web210project from "../img/web210project.png";
import web115project from "../img/web115project.png";
import web250projectwide from "../img/web250project-wide.png";
import web210projectwide from "../img/web210project-wide.png";
import web115projectwide from "../img/web115project-wide.png";

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
                        <h1>Projects</h1>
                        <div id="projects-container">
                            <figure class="project">
                                <a href="https://wcet.waketech.edu/cmkuerner/web250/wordpress/" target="_blank" rel="noreferrer">
                                    <picture>
                                        <source media="(max-width: 900px)" srcset={web250projectwide}/>
                                        <img src={web250project} alt=""/>
                                    </picture>
                                </a>
                                <figcaption>
                                    <b>WordPress Portfolio</b><br/>
                                    WEB-250 &diams; Fall '22<br/>
                                </figcaption>
                            </figure>

                            <figure class="project">
                                <picture>
                                    <source media="(max-width: 900px)" srcset={web210projectwide}/>
                                    <img src={web210project} alt=""/>
                                </picture>
                                <figcaption>
                                    <b>Bootstrap Portfolio</b><br/>
                                    WEB-210 &diams; Fall '22<br/>
                                </figcaption>
                            </figure>

                            <figure class="project">
                                <picture>
                                    <source media="(max-width: 900px)" srcset={web115projectwide}/>
                                    <img src={web115project} alt=""/>
                                </picture>
                                <figcaption>
                                    <b>JS Resume Builder</b><br/>
                                    WEB-115 &diams; Spring '22<br/>
                                </figcaption>
                            </figure>
                        </div>
                    
                </div>
            </section>
    
            <section id="skills">
                <div class="section-container">
                    <div class="section-text">
                        <h1>Skills</h1>
                        <ul id="skills-list">
                            <li class="skill-li">
                                <i class="skill-icon fa-brands fa-html5"></i>
                                <p>HTML 5</p>
                            </li>
                            <li class="skill-li">
                                <i class="skill-icon fa-brands fa-css3"></i>
                                <p>CSS 3</p>
                            </li>
                            <li class="skill-li">
                                <i class="skill-icon fa-brands fa-react"></i>
                                <p>React</p>
                            </li>
                            <li class="skill-li">
                                <i class="skill-icon fa-brands fa-square-js"></i>
                                <p>JavaScript</p>
                            </li>
                            <li class="skill-li">
                                <i class="skill-icon fa-brands fa-bootstrap"></i>
                                <p>Bootstrap</p>
                            </li>
                        </ul>
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