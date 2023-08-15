import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "./data/listData";
import { ModeContext } from "./modeContext";
export default function Home(){
    const [list, setLists] = React.useState([])
    const { darkState, setDarkState } = useContext(ModeContext)
    React.useEffect(()=>{
        setLists(data)
    }, [])
    const cardEl = list.map(item => {
        const {id, name, category, desc, image} = item
        return (
            <Link to="/lists" className="home-link" key={id}>
            <div className="cards-lists">
                <img src={image} className="home-image" />
                <div className="home-desc">
                    <div className="home-cat">
                        <h1>Category: {category}</h1>
                        <h1>Type: {name}</h1>
                    </div>
                    <p>{desc}</p>
                </div>
            </div>
            </Link>
        )
    })
    return(
        <div className={darkState ? "home dark" : "home"}>
            <main className="home-page">
                <div className="home-card">
                    <h1 className="red">Get Up to 20%</h1>
                    <h1>On Everything</h1>
                    <p>We provide customers with a premier selection of products, featuring discounts ranging from 20% to 60%. Explore our collection of both brand-new and gently-used items sourced from a variety of renowned global companies.</p>
                    <Link to="/products" className="home-button">Shop</Link>
                </div>
            </main>
            <div className="statue-list">
                <h1 className="statue-title">Why us?!</h1>
                <main className="statue-cards">
                    <div className="statue-card">
                        <h1>9786 Active Customer</h1>
                    </div>
                    <div className="statue-card">
                        <h1>24/7 Services</h1>
                    </div>
                    <div className="statue-card">
                        <h1>34 Branches</h1>
                    </div>
                </main>
            </div>
            <div className="home-explore">
                <h1>Explores our Lists</h1>
                <p className="underline"></p>
            </div>
            <div key={list.id}>
                {cardEl}
            </div>
        </div>
    )
}