import React from "react";
import { Link } from "react-router-dom";
import { data } from "./data/listData";
export default function Home(){
    const [list, setLists] = React.useState([])
    React.useEffect(()=>{
        setLists(data)
    }, [])
    const cardEl = list.map(item => {
        const {id, name, category, desc, image} = item
        return (
            <Link to="/lists" className="home-link">
            <div className="cards-lists" key={item.id}>
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
        <div className="home">
            <main className="home-page">
                <div className="home-card">
                    <h1 className="red">Get Up to 20%</h1>
                    <h1>On Everything</h1>
                    <p>We offer the best range of our products to customer with 20%, 30% and up to 60%. here you can buy the newest and used item from world different companies.</p>
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