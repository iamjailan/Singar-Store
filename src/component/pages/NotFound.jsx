import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "./modeContext";

export default function NotFound(){
    const { darkState } = useContext(ModeContext)
    return(
        <div className={darkState ? "not-found dark" : "not-found"}>
            <h1>404</h1>
            <h1>Sorry this page not found</h1>
            <Link to="/">Return Home</Link>
        </div>
    )
}