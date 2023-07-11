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
                                <a href="https://wcet.waketech.edu/cmkuerner/WEB210/portfolio/index.html" target="_blank" rel="noreferrer">
                                    <picture>
                                        <source media="(max-width: 900px)" srcset={web210projectwide}/>
                                        <img src={web210project} alt=""/>
                                    </picture>
                                    </a>              
                                <figcaption>
                                    <b>Bootstrap Portfolio</b><br/>
                                    WEB-210 &diams; Fall '22<br/>
                                </figcaption>                  
                            </figure>

                            <figure class="project">
                                <a href="https://wcet.waketech.edu/cmkuerner/WEB210/other/example1/finalProject.html" target="_blank" rel="noreferrer">
                                    <picture>
                                        <source media="(max-width: 900px)" srcset={web115projectwide}/>
                                        <img src={web115project} alt=""/>
                                    </picture>
                                </a>
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
                        <h3>Certificates</h3>
                            <ul class="experience-list">
                                <li><b><span class="color3">IT: Web Development Basics certificate</span></b> from Wake Tech on 07/26/22</li>
                                <li><b>LinkedIn Learning certificates</b></li>
                                    <ul class="experience-sublist">
                                        <li>2021 <em>HTML: Images and Figures</em></li>
                                        <li>2022 <em>Learning GitHub</em></li>
                                        <li>2022 <em>CSS Essential Training</em></li>
                                        <li>2022 <em>PHP for WordPress</em></li>
                                        <li>2022 <em>MERN Essential Training</em></li>
                                        <li>2023 <em>React.js Essential Training</em></li>
                                    </ul>
                                <li><b>MongoDB certificates</b></li>
                                    <ul class="experience-sublist">
                                        <li>2023 <em>Introduction to MongoDB</em></li>
                                        <li>2023 <em>MongoDB Node.js Developer Path</em></li>
                                    </ul>
                            </ul>
                        <h3>Coursework Highlights</h3>
                            <ul class="experience-list">
                                <li>CTI-110, 2021: <b>HTML</b> and <b>CSS</b></li>
                                <li>DBA-120, 2021: <b>Oracle</b>, <b>SQL</b>, and <b>MySQL</b></li>
                                <li>WEB-115, 2022: <b>JavaScript</b></li>
                                <li>WEB-210, 2022: <b>Bootstrap</b></li>
                                <li>WEB-182, 2022: <b>PHP</b> and <b>MySQL</b></li>
                                <li>WEB-250, 2022: <b>WordPress</b> and <b>SEO basics</b></li>
                                <li>WEB-215, 2023: MERN stack - <b>MongoDB</b>, <b>Express.js</b>, <b>React.js</b>, <b>Node.js</b></li>
                            </ul>
                            <p>...and more!</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;