import React from "react";

export default function FillError({cssClass, text}){
    return (
        <p className={cssClass}>{text}</p>
    )
}