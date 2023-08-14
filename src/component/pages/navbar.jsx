import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { BsBagFill } from 'react-icons/bs'
import { useCart } from "react-use-cart";
import { BiHelpCircle, BiHomeCircle } from "react-icons/bi"
import { LiaClipboardListSolid } from "react-icons/lia"
import { MdProductionQuantityLimits } from "react-icons/md"

export default function Navbar(){
    const [menu, setMenu] = useState(false)
    function handleMenu(){
        setMenu(prevMenu => !prevMenu)
    }
    const { totalItems } = useCart()
    return (
        <>
            <nav className="navbar">
                <h1>Singar Store</h1>
                <div className="navbar-menu">
                    <ul>
                        <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}><BiHomeCircle /></NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}><MdProductionQuantityLimits /></NavLink>
                        <NavLink to="bag" className={({isActive}) => isActive ? "active-links": null}><BsBagFill /><span className="nav-total">{totalItems === 0 ? null : totalItems}</span></NavLink>
                        <NavLink to="/lists" className={({isActive}) => isActive ? "active-links": null}><LiaClipboardListSolid /></NavLink>
                        <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}><BiHelpCircle /></NavLink>
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
                        <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}><BiHomeCircle /></NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}><MdProductionQuantityLimits /></NavLink>
                        <NavLink to="bag" className={({isActive}) => isActive ? "active-links": null}><BsBagFill /><span className="nav-total">{totalItems === 0 ? null : totalItems}</span></NavLink>
                        <NavLink to="/lists" className={({isActive}) => isActive ? "active-links": null}><LiaClipboardListSolid /></NavLink>
                        <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}><BiHelpCircle /></NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}