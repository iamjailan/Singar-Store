import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import { NavLink, useSearchParams, useParams } from "react-router-dom"
import { useContext } from "react";
import { ModeContext } from "../modeContext";

export default function ProductCards(props, index, handleMessage){
    const { addItem } = useCart()
    const [searchProduct, setSearchProduct] = useSearchParams()
    const typeFilter = searchProduct.get("type")
    const { darkState } = useContext(ModeContext)

    return (
        <main className={darkState ? "product-card card" : "product-card"} key={props.id}>
            <NavLink  state={{ search: `?${searchProduct.toString()}`, type: typeFilter}} to={`/products/${props.id}`}>
                <section className="product-image">
                    <img src={props.image} />
                </section>
                <div className="product-details">
                    <h1>{props.name}</h1>
                    <h1><span>${props.price}</span> / ${props.discountPrice}</h1>
                </div>
            </NavLink>
                <div className="product-card-btn">
                    <button onClick={() => {addItem(props.item); props.handleMessage()}}>Add to Bag</button>
                 </div>
            </main>
    )
}