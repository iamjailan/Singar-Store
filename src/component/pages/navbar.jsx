import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    const [menu, setMenu] = useState(false)
    function handleMenu(){
        setMenu(prevMenu => !prevMenu)
    }
    return (
        <>
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
            <nav className={menu ? "navbar--mobile-height" : "navbar--mobile"}>
               <div className="navbar-flex">
                    <h1>Singar Store</h1>
                    <img src="menu.svg" className="svg" onClick={handleMenu} />
               </div>
                <div className={menu ? "show-bar" : "hide-bar"}>
                    <ul>
                        <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}>Home</NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}>Products</NavLink>
                        <NavLink to="pricing" className={({isActive}) => isActive ? "active-links": null}>Pricing</NavLink>
                        <NavLink to="/lists" className={({isActive}) => isActive ? "active-links": null}>Lists</NavLink>
                        <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}>Help</NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}