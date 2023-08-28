import React, { useContext } from "react";
import "./index.css"
import { LoginState } from "../modeContext";
import { useNavigate } from "react-router-dom";

export default function Lists(){
    const { login, setLogin } = useContext(LoginState)
    const clearStorage = localStorage.getItem("loginState")
    const navigate = useNavigate()

    function logout(){
        setLogin(false)
        navigate("/login")
    }

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}