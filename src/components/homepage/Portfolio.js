import React from "react";
import "../homepage/portfolio.css";
import InteliumImg from "../../images/intelium-image.png";
import McubImg from "../../images/mcub-image.png";
import AirbeanMenu from "../../images/airbean-menu.png";
import AirbeanDone from "../../images/airbean-done.png";
import EwalletAdd from "../../images/e-wallet-add-cards.png";
import EwalletCards from "../../images/e-wallet-cards.png";
import WebshopDetails from "../../images/webshop-details.png";
import WebshopCart from "../../images/webshop-cart.png";
import MeetupHome from "../../images/meetup-home.png";
import MeetupEvent from "../../images/meetup-event.png";

export default function Portfolio() {
    return (
        <section className="portfolio-page">
            <h1><span id="portfolio"></span>Portfolio</h1>
            <section className="master-thesis">
                <h3>Master Thesis</h3>
                <section className="portfolio-grid">
                    <section className="bgr-color">
                        <h5>FrontEdgeIT</h5>
                        <p>
                            This is my master thesis where I created a new version of FrontEdgeIT's website together with two classmates.
                            In this project we used React and Gatsby to code the frontend of the website. We used wordpress headless cms to import the companies backend to the website.
                            We used Figma to create the design before getting started.
                            We used Github and Github projects to structure our work.
                        </p>
                        <p>
                            Visit FrontEdgeIT's website at <a href="https://frontedgeit.se/" target="_blank">https://frontedgeit.se/</a>.
                            Our updated version will be published on June 11th 2021.
                        </p>
                    </section>
                </section>
            </section>
            <section className="internship">
                <h3>Internship</h3>
                <section className="portfolio-grids">
                    <section className="bgr-color">
                        <h5>Intelium Engineering AB</h5>
                        <p>
                            This is my first internship where I created a new version of Intelium Engineering's website.
                            In this project I used HTML, CSS and Vanilla JavaScript to code the frontend of the website. I used PHP to create the backend of the website.
                            I connected the website to a MySQL database for saving important information.
                            I used Figma to create the design before getting started.
                        </p>
                        <p>
                            Visit Intelium Engineering's website at <a href="https://www.intelium.se/" target="_blank">https://www.intelium.se/</a>.
                        </p>
                        <img className="intelium-img" src={InteliumImg} alt="" />
                    </section>
                    <section className="bgr-color">
                        <h5>m:CUB Engineering</h5>
                        <p>
                            This is my second internship where I created a new version of m:CUB Engineering's website.
                            In this project I used HTML, CSS and Vanilla JavaScript to code the frontend of the website. I used PHP to create the backend of the website.
                            I connected the website to a MySQL database for saving important information.
                            I used Figma to create the design before getting started.
                        </p>
                        <p>
                            Visit m:CUB Engineering's website at <a href="https://www.mcub.se/" target="_blank">https://www.mcub.se/</a>.
                        </p>
                        <img className="mcub-img" src={McubImg} alt="" />
                    </section>
                </section>
            </section>
            <section className="school-work">
                <h3>School Work</h3>
                <section className="portfolio-grids">
                    <section className="bgr-color">
                        <h5>AirBean Project</h5>
                        <p>
                            This is a group project where I created a imaginary coffee shop together with another classmate.
                            In this project we used the framework Vue.js to code the website. We used Vue-router and Vuex.
                            We recieved a design guide that we followed.
                            We used Github to share our code.
                        </p>
                        <section className="row">
                            <img src={AirbeanMenu} alt="" />
                            <img src={AirbeanDone} alt="" />
                        </section>
                    </section>
                    <section className="bgr-color">
                        <h5>E-Wallet Project</h5>
                        <p>
                            This is a individual project where I created a imaginary e-wallet.
                            In this project I used the framework Vue.js to code the e-wallet.
                            I recieved a design guide that I followed.
                            I used Github to share my code.
                        </p>
                        <section className="row">
                            <img src={EwalletAdd} alt="" />
                            <img src={EwalletCards} alt="" />
                        </section>
                    </section>
                    <section className="bgr-color">
                        <h5>Webshop Project</h5>
                        <p>
                            This is a group project where I created a imaginary webshop together with two other classmates.
                            In this project we used the framework Vue.js to code the webshop.
                            We used Jest to test our application.
                            We used Figma to create the design before getting started.
                            We used Github to share our code and we used Trello for our Kanban board.
                        </p>
                        <section className="row">
                            <img src={WebshopDetails} alt="" />
                            <img src={WebshopCart} alt="" />
                        </section>
                    </section>
                    <section className="bgr-color">
                        <h5>Meet Up Project</h5>
                        <p>
                            This is a individual project where I created a imaginary application where you can sign up for an event.
                            In this project I used the framework Vue.js to code the application.
                            I used Jest to test my application.
                            I used Figma to create the design before getting started.
                            I used Github to share my code and I used Docker in order to publish my application on Heroku.
                        </p>
                        <p>
                            Go check out my Meet Up project at <a href="https://join-meetup.herokuapp.com/" target="_blank">https://join-meetup.herokuapp.com/</a>.
                        </p>
                        <section className="row">
                            <img src={MeetupHome} alt="" />
                            <img src={MeetupEvent} alt="" />
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}
