import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import productData from "./product-data";

export default function SingleProduct(props){
    const {id} = useParams()
    const [data, setData] = React.useState(productData)
    const location = useLocation()
    const [count, setCount] = React.useState(1)

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    const productId = id
    const productFilter = data.find(product => product.id == productId)

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

    return (
        <div className="all-card">
            <Link className="back-btn" to={`..${search}`} relative="path">&larr; back to {type} products</Link>
            <main className="single-product-page" key={productFilter.id}>
                <section className="product-images">
                    <img src={`/${productFilter.image}`} />
                    <div className="products-images">
                    <img src={`/${productFilter.image1}`} />
                    <img src={`/${productFilter.image2}`} />
                    </div>
                </section>
                <div className="single-details">
                    <h1 className="product-name">{productFilter.name}</h1>
                    <h1 className="single-price">${productFilter.price}.00</h1>
                    <div className="s-details-review">
                        <p>{productFilter.rating}</p>
                        <p className="review-amount">{productFilter.reviewAmount} Reviews</p>
                    </div>
                    <p className="single-text">{productFilter.text}</p>
                    <div className="single-btn">
                        <button className="cart-amount-btn" onClick={decCart}>-</button>
                        <button className="cart-amount-btn">{count}</button>
                        <button className="cart-amount-btn" onClick={() => incCart()}>+</button>
                        <button className="add-to-cart">Add to Bag</button>
                    </div>
                </div>
            </main>
        </div>
    )
}