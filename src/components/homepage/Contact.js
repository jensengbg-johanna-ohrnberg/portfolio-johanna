import React from "react";
import "./contact.css";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {
    return (
        <main className="contact-page">
            <h1><span id="contact"></span>Contact Me</h1>
            <p>If you find me interesting, don't hesitate to contact me.</p>
            <section className="grid-template">
                <section className="bgr-color">
                    <p><span>Phone Number: </span>0703 - 73 43 20</p>
                </section>
                <section className="bgr-color">
                    <p><span>Email: </span>j-ohrnberg@live.se</p>
                </section>
            </section>
            <section className="bgr-color">
                <h3>Want to see more</h3>
                <p>Go check out my <a href="#">Linkedin</a> and <a href="#">Github</a> page.</p>
                <a href="#"><AiOutlineLinkedin className="icon" /></a>
                <a href="#"><AiOutlineGithub className="icon" /></a>
            </section>
        </main>
    )
}
