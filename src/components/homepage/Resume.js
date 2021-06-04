import React from "react";
import "./resume.css";

export default function Resume() {
    return (
        <main>
            <h1><span id="resume"></span>Resume</h1>
            <section className="education">
                <h3>Education</h3>
                <section className="grids">
                    <section className="bgr-color">
                        <h5>Jensen Yrkeshögskola</h5>
                        <p className="cursive">August 2019 - June 2021</p>
                        <p>
                            An education with a focus on web development.
                            Fun and challenging education.
                            Got to learn many new languages and frameworks.
                            The education ended with an educative internship.
                        </p>
                    </section>
                    <section className="bgr-color">
                        <h5>University of Gothenburg</h5>
                        <p className="cursive">August 2017 - October 2018</p>
                        <p>
                            An education with a focus on the ocean.
                            A mix between biology, geology, chemistry and oceanography.
                            Developed my ability to work together as a team and learned to plan my time well.
                        </p>
                    </section>
                    <section className="bgr-color">
                        <h5>Averett University</h5>
                        <p className="cursive">August 2013 - May 2017</p>
                        <p>
                            An exciting education where I developed my communication skills and my English language skills.
                        </p>
                    </section>
                </section>
            </section>
            <section className="work-experience">
                <h3>Work Experience</h3>
                <section className="grids">
                    <section className="bgr-color">
                        <h5>FrontEdgeIT, Gothenburg - Front-End Developer</h5>
                        <p className="cursive">May 2021 – June 2021</p>
                        <p>
                            My master thesis project where I, together with two others, redo FrontEdgeIT's website.
                            Techniques used are React, Gatsby, SCSS, Figma, headless CMS, Jest and Github.
                            Fun and instructive.
                        </p>
                    </section>
                    <section className="bgr-color">
                        <h5>Intelium Engineering AB, Gothenburg - Front-End Developer</h5>
                        <p className="cursive">November 2020 - May 2021</p>
                        <p>
                            This is an internship that is the last part of my education.
                            Here I have created a website and I am doing at least one more for their company.
                            Techniques used are HTML, CSS, JavaScript, PHP and MySQL.
                            Challenging and educational.
                        </p>
                    </section>
                    <section className="bgr-color">
                        <h5>Lekia, Gothenburg - Shop Assistant</h5>
                        <p className="cursive">November 2018 - now</p>
                        <p>
                            In this workplace, I have learned to handle customers, all with different requirements and wishes.
                            Big focus on service and accuracy.
                        </p>
                    </section>
                    <section className="bgr-color">
                        <h5>ICA Kvantum, Kungsbacka - Shop Assistant</h5>
                        <p className="cursive">November 2018 - May 2021</p>
                        <p>
                            Customer service, inventory and sorting of goods.
                            Teamwork.
                        </p>
                    </section>
                </section>
            </section>
            <section className="language-skills">
                <h3>Language Skills</h3>
                <section className="grids">
                    <section className="bgr-color">
                        <h5>Swedish</h5>
                        <p>Native</p>
                    </section>
                    <section className="bgr-color">
                        <h5>English</h5>
                        <p>Fluent</p>
                    </section>
                </section>
            </section>
            <section className="other-qualifications">
                <h3>Other Qualifications</h3>
                <section className="grids">
                    <section className="bgr-color">
                        <p>Played soccer in the USA where I got a "Honorable mention" award for my achievement.</p>
                    </section>
                    <section className="bgr-color">
                        <p>Play soccer in Göteborg FF.</p>
                    </section>
                    <section className="bgr-color">
                        <p>Play ice hockey in Hovås HC.</p>
                    </section>
                    <section className="bgr-color">
                        <p>Padi open water certified.</p>
                    </section>
                </section>
            </section>
            <section className="references">
                <h3>References</h3>
                <section className="grids">
                    <section className="bgr-color">
                        <p>Provided on request.</p>
                    </section>
                </section>
            </section>
        </main>
    )
}
