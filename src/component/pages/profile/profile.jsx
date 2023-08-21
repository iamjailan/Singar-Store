import React, { useContext } from "react";
import "./index.css"
import { LoginState } from "../modeContext";

export default function Lists(){
    const { login } = useContext(LoginState)
    console.log(login);
    return (
        <div>
            <h1>This is Lists page</h1>
        </div>
    )
}