import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h1>Singar Store</h1>
            <div className="navbar-menu">
                <ul>
                    <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}>Home</NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}>Products</NavLink>
                    <NavLink to="pricing" className={({isActive}) => isActive ? "active-links": null}>Pricing</NavLink>
                    <NavLink to="/lists" className={({isActive}) => isActive ? "active-links": null}>Lists</NavLink>
                    <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}>Help</NavLink>
                </ul>
            </div>
        </nav>
    )
}