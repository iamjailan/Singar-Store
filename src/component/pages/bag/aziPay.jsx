import React from "react";
import { useContext } from "react";
import { ModeContext } from "../modeContext";

export default function AziPay(){
    const { darkState } = useContext(ModeContext)
    return (
        <article className={darkState ? "azi-pay dark" : "azi-pay"}>
            <h1>Scan this QR code with AziPay!</h1>
            <div className="qr-code">

            </div>
        </article>
    )
}