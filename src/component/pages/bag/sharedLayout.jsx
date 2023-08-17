import React from "react";
import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ModeContext } from "../modeContext";
import AziPay from "./aziPay";
import CreditCard from "./crediCard";

export default function SharedBag(){
    const { darkState } = useContext(ModeContext)
    return (
        <>   
            <h1 className={darkState ? "shared-bag dark" : "shared-bag"}>Please select  a method</h1>
            <section className={darkState ? "sharedBag dark" : "sharedBag"}>
                <NavLink to="creditCard" className={({isActive}) => isActive ? "active-links": null}>Cred Card</NavLink>
                <NavLink to="aziPay" className={({isActive}) => isActive ? "active-links": null}>AziPay</NavLink>
            </section>
            <Outlet />
        </>
    )
}