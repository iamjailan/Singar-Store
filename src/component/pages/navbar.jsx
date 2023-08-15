import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries, CiDark } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { BsBagFill } from 'react-icons/bs'
import { useCart } from "react-use-cart";
import { BiHelpCircle, BiHomeCircle } from "react-icons/bi"
import { LiaClipboardListSolid } from "react-icons/lia"
import { MdProductionQuantityLimits, MdLightMode } from "react-icons/md"
import { ModeContext } from "./modeContext";
import { useEffect } from "react";

export default function Navbar(){
    const [menu, setMenu] = useState(false)
    function handleMenu(){
        setMenu(prevMenu => !prevMenu)
    }
    const { totalItems } = useCart()
    const { setDarkState, darkState } = useContext(ModeContext)

    function toggleMode(){
        setDarkState(prevMode => !prevMode)
    }
    useEffect(() => {
        const savedState = localStorage.getItem("darkState");
        if(savedState){
            setDarkState(savedState === 'true')
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('darkState', darkState)
    }, [darkState])
    return (
        <>
            <nav className={darkState ? "navbar dark" : "navbar"}>
                <h1>Singar Store</h1>
                <div className="navbar-menu">
                    <ul>
                        <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}><BiHomeCircle /></NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}><MdProductionQuantityLimits /></NavLink>
                        <NavLink to="bag" className={({isActive}) => isActive ? "active-links": null}><BsBagFill /><span className="nav-total">{totalItems === 0 ? null : totalItems}</span></NavLink>
                        <NavLink to="/lists" className={({isActive}) => isActive ? "active-links": null}><LiaClipboardListSolid /></NavLink>
                        <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}><BiHelpCircle /></NavLink>
                        <NavLink onClick={toggleMode}>{ darkState ? <CiDark /> : <MdLightMode />}</NavLink>
                    </ul>
                </div>
            </nav>
            <header className={darkState ? "dark" : null}>
                <nav className={menu ? "navbar--mobile-height" : "navbar--mobile"}>
                    <div className="navbar-flex">
                            <h1>Singar Store</h1>
                            {menu ? <GrClose className="svg" onClick={handleMenu} /> : <CiMenuFries className="svg" onClick={handleMenu} />}
                            
                    </div>
                    <div className={menu ? "show-bar" : "hide-bar"}>
                        <ul>
                            <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}><BiHomeCircle /></NavLink>
                            <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}><MdProductionQuantityLimits /></NavLink>
                            <NavLink to="bag" className={({isActive}) => isActive ? "active-links": null}><BsBagFill /><span className="nav-total">{totalItems === 0 ? null : totalItems}</span></NavLink>
                            <NavLink to="/lists" className={({isActive}) => isActive ? "active-links": null}><LiaClipboardListSolid /></NavLink>
                            <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}><BiHelpCircle /></NavLink>
                            <NavLink onClick={toggleMode}>{ darkState ? <CiDark /> : <MdLightMode />}</NavLink>
                        </ul>
                    </div>
                </nav>
               </header>
        </>
    )
}