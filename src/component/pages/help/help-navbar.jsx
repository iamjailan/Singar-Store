import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpNavbar(){
    return (
        <>
            <nav className="help-navbar">
                <NavLink end className={({isActive}) => isActive ? "active-links": null} to="">Help</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-links": null} to="about">About US</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-links": null} to="contact">Contact</NavLink>
            </nav>
            <Outlet />
        </>
    )
}