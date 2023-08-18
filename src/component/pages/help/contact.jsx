import React, { useContext } from "react";
import { ModeContext } from "../modeContext";
import { Link } from "react-router-dom";

export default function Contact(){
    const { darkState } = useContext(ModeContext)
    return (
        <header className={darkState ? "contact dark" : "contact"}>
            <section className="contact-cards">
                <div className="contact-card">
                    <h1>Chat Support</h1>
                    <p>Our Support team is just a click away. we answer quickly.</p>
                    <Link>Chat Now &rarr;</Link>
                </div>
                <div className="contact-card">
                    <h1>E-mail Support</h1>
                    <p>prefer to email ? Send us an email and we'll get back to you soon.</p>
                    <Link to="https://jailanwardak@gmail.com">E-mail Now &rarr;</Link>
                </div>
                <div className="contact-card">
                    <h1>Help Center</h1>
                    <p>Our self-survey help center is open 24/7 with 150+ articles to help.</p>
                    <Link>Visit Help Center &rarr;</Link>
                </div>
            </section>
            <main className="contact-main">
                <section>
                    <p>OUR SUPPORT TEAM</p>
                    <h1>Talk to real People</h1>
                    <h4>Amazing customer support is the #1 reason our creator cite for choosing Podia, Our support team that the entrepreneurs journey comes with challenges, and we're here to help you every step of the way.</h4>
                </section>
                <div className="contact-real">
                    <div className="real-card">
                        <img src="/profile.png" />
                        <h5>Kabul, Afghanistan</h5>
                        <h2>Jailan Wardak</h2>
                        <p>Ask me about everything's, i'm here to listen.</p>
                    </div>
                    <div className="real-card">
                        <img src="/profile.png" />
                        <h5>Mazar-e-Sharif, Afghanistan</h5>
                        <h2>Wagma Wardak</h2>
                        <p>Ask me about everything's, i'm here to listen.</p>
                    </div>
                    <div className="real-card">
                        <img src="/profile.png" />
                        <h5>Kabul, Afghanistan</h5>
                        <h2>Attal Wardak</h2>
                        <p>Ask me about everything's, i'm here to listen.</p>
                    </div>
                    <div className="real-card">
                        <img src="/profile.png" />
                        <h5>Herat, Afghanistan</h5>
                        <h2>Wadan Wardak</h2>
                        <p>Ask me about everything's, i'm here to listen.</p>
                    </div>
                </div>
            </main>
        </header>
    )
}