import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="home">
            <main className="home-page">
                <div className="home-card">
                    <h1 className="red">Get Up to 20%</h1>
                    <h1>On Everything</h1>
                    <p>We offer the best range of our products to customer with 20%, 30% and up to 60%. here you can buy the newest and used item from world different companies.</p>
                    <Link to="/products" className="home-button">Shop</Link>
                </div>
            </main>
            <div className="home-explore">
                <h1>Explores our Lists</h1>
                <p className="underline"></p>
            </div>
        </div>
    )
}