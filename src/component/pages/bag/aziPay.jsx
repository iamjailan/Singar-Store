import React from "react";
import { useContext } from "react";
import { ModeContext } from "../modeContext";
import QRCode from 'qrcode.react' 
export default function AziPay(){
    const { darkState } = useContext(ModeContext)
    const pageUrl = window.location.href;
    return (
        <article className={darkState ? "azi-pay dark" : "azi-pay"}>
            <h1>Scan this QR code with AziPay!</h1>
            <div className="qr-code">
                <QRCode value={pageUrl} />
            </div>
        </article>
    )
}