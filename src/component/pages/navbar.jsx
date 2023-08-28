import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries, CiDark } from 'react-icons/ci';
import { BsBagFill } from 'react-icons/bs'
import { useCart } from "react-use-cart";
import { MdLightMode, MdOutlineRestaurantMenu } from "react-icons/md"
import { LoginState, ModeContext } from "./modeContext";
import { useEffect } from "react";

export default function Navbar(){
    const [menu, setMenu] = useState(false)
    function handleMenu(){
        setMenu(prevMenu => !prevMenu)
    }
    const { totalItems } = useCart()
    const { setDarkState, darkState } = useContext(ModeContext)
    const { login, setLogin } = useContext(LoginState)
    const isLoggedIn = localStorage.getItem("loginState")


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
                        <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}>Home</NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}>Products</NavLink>
                        <NavLink to="bag" id="flex-bag" className={({isActive}) => isActive ? "active-links": null}><BsBagFill id="bag-icon" /> Bag<span className="nav-total">{totalItems === 0 ? null : totalItems}</span></NavLink>
                        {login ? <NavLink to="/profile" className={({isActive}) => isActive ? "active-links": null}>Profile</NavLink> : <NavLink to="/login" className={({isActive}) => isActive ? "active-links": null}>Login</NavLink>}
                        <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}>Help</NavLink>
                        {login ? <NavLink to="/add-product" className={({isActive}) => isActive ? "active-links": null}>Add Product</NavLink> : null}
                        <NavLink onClick={toggleMode}>{ darkState ? <CiDark /> : <MdLightMode />}</NavLink>
                    </ul>
                </div>
            </nav>
            <header className={darkState ? "dark" : null}>
                <nav className={menu ? "navbar--mobile-height" : "navbar--mobile"}>
                    <div className="navbar-flex">
                            <h1>Singar Store</h1>
                            {menu ? <MdOutlineRestaurantMenu className="svg forDark" onClick={handleMenu} /> : <CiMenuFries className="svg" onClick={handleMenu} />}
                            
                    </div>
                    <div className={menu ? "show-bar" : "hide-bar"}>
                        <ul>
                            <NavLink to="/" className={({isActive}) => isActive ? "active-links": null}>Home</NavLink>
                            <NavLink to="/products" className={({isActive}) => isActive ? "active-links": null}>Products</NavLink>
                            <NavLink to="bag" className={({isActive}) => isActive ? "active-links": null}><BsBagFill /> Bag<span className="nav-total">{totalItems === 0 ? null : totalItems}</span></NavLink>
                            {login ? <NavLink to="/profile" className={({isActive}) => isActive ? "active-links": null}>Profile</NavLink> : <NavLink to="/login" className={({isActive}) => isActive ? "active-links": null}>Login</NavLink>}
                            <NavLink to="/help" className={({isActive}) => isActive ? "active-links": null}>Help</NavLink>
                            {login ? <NavLink to="/add-product" className={({isActive}) => isActive ? "active-links": null}>Add Product</NavLink> : null}
                            <NavLink onClick={toggleMode}>{ darkState ? <CiDark /> : <MdLightMode />}</NavLink>
                        </ul>
                    </div>
                </nav>
               </header>
        </>
    )
}