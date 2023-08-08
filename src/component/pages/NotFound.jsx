import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h1>Sorry this page not found</h1>
            <Link to="/">Return Home</Link>
        </div>
    )
}