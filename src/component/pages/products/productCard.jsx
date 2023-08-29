import React, { useEffect } from "react";
import "./index.css"
import { useCart } from "react-use-cart";
import { NavLink, useSearchParams, useParams } from "react-router-dom"
import { useContext } from "react";
import { LoginState, ModeContext } from "../modeContext";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function ProductCards(props, index, handleMessage){
    const { addItem } = useCart()
    const [searchProduct, setSearchProduct] = useSearchParams()
    const typeFilter = searchProduct.get("type")
    const { darkState } = useContext(ModeContext)
    const { login } = useContext(LoginState)
    const MySwal = withReactContent(Swal)


    function handleAlert(){
        MySwal.fire({
            title: <strong>Item Added to the Bag!</strong>,
            icon: 'success'
            })
    }

    return (
        <main className={darkState ? "product-card dark" : "product-card"} key={props.id}>
            <NavLink  state={{ search: `?${searchProduct.toString()}`, type: typeFilter}} to={`/products/${props.id}`}>
                <section className="product-image">
                    <img src={props.image} />
                </section>
                <div className="product-details">
                    <h1>{props.name}</h1>
                    <h1><span>AFG{props.price}</span> / AFG{props.discountPrice}</h1>
                </div>
            </NavLink>
                <div className="product-card-btn">
                    <button onClick={() => {addItem(props.item); handleAlert()}}>Add to Bag</button>
                 </div>
                 {login ? 
                 <div className="product-edit-btn">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                 </div>
                  : 
                  null
                 }
            </main>
    )
}