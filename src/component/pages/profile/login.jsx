import React, { useContext, useEffect } from "react";
import "./index.css"
import { LoginState, ModeContext } from "../modeContext";
import { json, useNavigate } from "react-router-dom";
export default function Login(){
    const { darkState } = useContext(ModeContext)
    const { login, setLogin } = useContext(LoginState)
    const navigate = useNavigate()
    const [inputValue, setInputValue] = React.useState({
        email: "",
        password: ""
    })
    function changeValue(e){
        setInputValue(prevData => {
            const {value, name} = e.target;
            return {
                ...prevData,
                [name] : value
            }
        })
    }
    function loginUser(){
        if(!inputValue.email || !inputValue.password) return ;
        setLogin(true)
        navigate("/profile")
    }

    return (
        <section className={darkState ? "login dark" : "login"}>
            <h1 className="login-title">Login Here!</h1>
            <main className="login-inputs">
                <input value={inputValue.email} name="email" onChange={changeValue} type="email"placeholder="Enter Your E-mail..." />
                <input value={inputValue.password} name="password" onChange={changeValue} type="password"placeholder="Enter Your Password..." />
                <button onClick={() => loginUser()}>Login</button>
            </main>
        </section>
    )
}