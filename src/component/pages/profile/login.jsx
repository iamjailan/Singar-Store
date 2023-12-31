import React, { useContext, useEffect } from "react";
import "./index.css"
import { LoginState, ModeContext } from "../modeContext";
import { Link, useNavigate } from "react-router-dom";
export default function Login(){
    const { darkState } = useContext(ModeContext)
    const { login, setLogin, loginError, setLoginError } = useContext(LoginState)
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
        if(!inputValue.email || !inputValue.password) return (
            setLoginError(true),
            setTimeout(() => {
                setLoginError(false)
            } ,2000)
        );
        navigate("/profile")
        setLogin(true)
    }
    return (
        <section className={darkState ? "login dark" : "login"}>
            <h1 className="login-title">Login</h1>
            <main className="login-inputs">
                <input value={inputValue.email} name="email" onChange={changeValue} type="email" required placeholder="Enter Your E-mail..." />
                {loginError ? <p className="red-error">Please Enter Your E-mail!</p> : null}
                <input value={inputValue.password} name="password" onChange={changeValue} type="password"placeholder="Enter Your Password..." />
                {loginError ? <p className="red-error">Please Enter Your Password!</p> : null}
                <button onClick={() => loginUser()}>Login</button>
            </main>
            <div className="login-sign-up">
                <h4>Don't have an account? <Link to="/signUp" className="sign-up">SIGN-UP</Link></h4>
            </div>
        </section>
    )
}