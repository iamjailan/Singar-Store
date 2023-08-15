import React, { useContext } from "react";
import { ModeContext } from "../modeContext";

export default function About(){
    const { darkState, setDarkState } = useContext(ModeContext)
    return (
        <main className={darkState ? "about dark" : "about"}>
            <header className="about-header">
                <h1>About US</h1>
            </header>
            <main className="about-main">
                <h1 className="about-title">About Singar Store: Elevating Style in Kabul, Afghanistan</h1>
                <h3 className="about-text">Welcome to Singar Store, a proud member of the esteemed Wadan Group of Companies. Nestled in the heart of Kabul, Afghanistan, Singar Store is your premier destination for exquisite fashion and trendsetting accessories. With a commitment to delivering quality and sophistication, we curate a diverse collection that captures the essence of modern elegance. Step into a world where style knows no boundaries, and let Singar Store be your guide to refined fashion in the vibrant city of Kabul.</h3>
            </main>
        </main>
    )
}