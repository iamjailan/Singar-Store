import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ModeContext } from "../modeContext";

export default function HelpNavbar(){
    const { darkState } = useContext(ModeContext)
    return (
        <>
            <nav className={darkState ? "help-navbar dark" : "help-navbar"}>
                <NavLink end className={({isActive}) => isActive ? "active-links": null} to="">Help</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-links": null} to="about">About US</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-links": null} to="contact">Contact</NavLink>
            </nav>
            <Outlet />
        </>
    )
}