import React from "react";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h1>Wadan Company</h1>
            <div className="navbar-menu">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Lists</li>
                    <li>Help</li>
                </ul>
            </div>
        </nav>
    )
}