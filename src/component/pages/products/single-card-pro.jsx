import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { RiArrowGoBackLine } from "react-icons/ri"
import { FaLongArrowAltRight } from "react-icons/fa"
import { useContext } from "react";
import { ModeContext } from "../modeContext";

export default function SingleCardPro(props, index){
    const location = useLocation()
    const [count, setCount] = React.useState(1)
    const [displayMessage, setDisplayMessage] = useState(false)
    const { darkState } = useContext(ModeContext)
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        addItem,
    } = useCart()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    let cartAmount = 1;

    function decCart(){
        setCount(count - 1)
        if(count <= 1){
            setCount(1)
        }
    }
    function incCart(){
        setCount(count + 1)
        if(count >= 10){
            setCount(10)
        }
    }
    function handleMessage() {
        setDisplayMessage(prevMessage => !prevMessage)
        setTimeout(() => {
            setDisplayMessage(false) 
        }, 1500)
    }

    return (
        <div className={darkState ? "all-card dark" : "all-card"}>
            <Link className="back-btn" to={`..${search}`} relative="path"><RiArrowGoBackLine className="back-btn-icon" /> back to {type} products</Link>
            <main className="single-product-page" key={props.id}>
                <section className="product-images">
                    <img src={`/${props.image}`} />
                    <div className="products-images">
                    <img src={`/${props.image1}`} />
                    <img src={`/${props.image2}`} />
                    </div>
                </section>
                <div className="single-details">
                    <h1 className="product-name">{props.name}</h1>
                    <h1 className="single-price">${props.price}.00</h1>
                    <div className="s-details-review">
                        <p>{props.rating}</p>
                        <p className="review-amount">{props.reviewAmount} Reviews</p>
                    </div>
                    <p className="single-text">{props.text}</p>
                    <div className="single-btn">
                        <button className="add-to-cart" onClick={() => {addItem(props.item); handleMessage()}}>Add to Bag</button>
                    </div>
                    <div className="visit-my-bag">
                        {
                            isEmpty ? <div>
                                <h1>Your Bag is now empty</h1>
                            </div> : null
                        }
                        <Link to="/bag" >Visit My Bag <FaLongArrowAltRight className="icon" /></Link>
                        <div className={displayMessage ? "added-message" : "added-message hide"}>
                            <h1>Item added to Bag</h1>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}