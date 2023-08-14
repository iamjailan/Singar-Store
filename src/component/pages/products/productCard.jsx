import React from "react";
import { useCart } from "react-use-cart";
import { NavLink, useSearchParams, useParams } from "react-router-dom"

export default function ProductCards(props, index){
    const { addItem } = useCart()
    const [searchProduct, setSearchProduct] = useSearchParams()
    const typeFilter = searchProduct.get("type")
    const {id} = useParams()

    return (
        <main className="product-card" key={props.id}>
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
                    <button onClick={() => addItem(props.item)}>Add to Bag</button>
                 </div>
            </main>
    )
}