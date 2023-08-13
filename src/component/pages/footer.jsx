import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

export default function Footer(){
    return (
        <footer className="footer">
            <p>&copy; Wadan Group of Companies.</p>
            <div className="footer-social">
                <ul>
                    <Link target="_blank" to="https://www.facebook.com/iamjailan"><BsFacebook /></Link>
                    <Link target="_blank" to="https://www.instagram.com/iamjailan"><BsInstagram /></Link>
                    <Link target="_blank" to="https://www.x.com/iamjailan"><BsTwitter /></Link>
                    <Link target="_blank" to="https://www.github.com/iamjailan"><BsGithub /></Link>
                </ul>
            </div>
        </footer>
    )
}