import React from "react";
import { Link } from "react-router-dom";
import Products from "./products";
import { useContext } from "react";
import { ModeContext } from "../modeContext";

export default function Product(){
    const { darkState } = useContext(ModeContext)
    return (
        <section className={darkState ? "products dark": "products"}>
            <div className="product-land">
                <div className="product-wel">
                    <h1>Get 5% Cash</h1>
                    <h1>On every single Product</h1>
                    <p>From stylish fashion accessories to state-of-the-art gadgets, we have something for everyone. Browse through our collection and find the perfect item to enhance your lifestyle. Happy shopping!</p>
                    <Link className="learn-btn" to="/help">Learn More</Link>
                </div>
            </div>
            <main className="discount">
                <h2 className="discount-title">Save your money here!</h2>
                <div className="discount-cards">
                    <div className="discount-card first">
                        <h2 className="discount-save">Save</h2>
                        <h1 className="discount-price">AFG 100</h1>
                        <p className="discount-text">Buy up to 10 clothe at one time and get AFG 100 as gift.🎉</p>
                    </div>
                    <div className="discount-card second">
                        <h2 className="discount-save">Save</h2>
                        <h1 className="discount-price">AFG 70</h1>
                        <p className="discount-text">Buy up to 4 adult clothes at one time and get AFG AFG 70 as gift.🎉</p>
                    </div>
                    <div className="discount-card third">
                        <h2 className="discount-save">Save</h2>
                        <h1 className="discount-price">AFG 40</h1>
                        <p className="discount-text">Buy up to 2 couple shoes at one time and get AFG 40 as gift.🎉</p>
                    </div>
                    <div className="discount-card fourth">
                        <h2 className="discount-save">Save</h2>
                        <h1 className="discount-price">AFG 50</h1>
                        <p className="discount-text">Invite 10 friend and get AFG 50 as discount gift for each item.🎉</p>
                    </div>
                </div>
            </main>
            <Products />
        </section>
    )
}