import React, { useContext } from "react";
import "./index.css"
import { LoginState } from "../modeContext";
import App from "../../App";

export default function Lists(){
    const { login } = useContext(LoginState)
    console.log(login);
    return (
        <div>
            <button onClick={() => App.auth().signOut()}>Logout</button>
        </div>
    )
}