import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';

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
                        <NavLink to="bag" className={({isActive}) => isActive ? "active-links": null}>My Bag</NavLink>
                        <NavLink to="/lists" className={({isActive}) => isActive ? "active-links": null}>Lists</NavLink>
                        <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}>Help</NavLink>
                    </ul>
                </div>
            </nav>
            <nav className={menu ? "navbar--mobile-height" : "navbar--mobile"}>
               <div className="navbar-flex">
                    <h1>Singar Store</h1>
                    {menu ? <GrClose className="svg" onClick={handleMenu} /> : <CiMenuFries className="svg" onClick={handleMenu} /> }
                    
               </div>
                <div className={menu ? "show-bar" : "hide-bar"}>
                    <ul>
                        <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}>Home</NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}>Products</NavLink>
                        <NavLink to="bag" className={({isActive}) => isActive ? "active-links": null}>My Bag</NavLink>
                        <NavLink to="/lists" className={({isActive}) => isActive ? "active-links": null}>Lists</NavLink>
                        <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}>Help</NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}