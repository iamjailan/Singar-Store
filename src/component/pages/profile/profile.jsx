import React, { useContext, useEffect } from "react";
import "./index.css"
import { LoginState } from "../modeContext";
import { useNavigate } from "react-router-dom";

export default function Lists(){
    const [ localDate, setLocalDate ] = React.useState( new Date())
    const { login, setLogin } = useContext(LoginState)
    const clearStorage = localStorage.getItem("loginState")
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalDate(new Date())
        }, 1000)

        return () => {
            clearInterval(interval);
        } 
    }, [])

    function logout(){
        setLogin(false)
        navigate("/login")
    }
    const formatDate = (date) => {
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        return <div>{hours < 10 ? 0 : null}{hours} : {minutes < 10 ? 0 : null}{minutes} : {seconds < 10 ? 0 : null}{seconds}</div>
    }

    return (
        <div>
            <button onClick={logout}>Logout</button>
            <div>
                <h1>{formatDate(localDate)}</h1>
            </div>
        </div>
    )
}