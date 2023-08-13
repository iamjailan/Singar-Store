import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import productData from "./product-data";

export default function SingleProduct(){
    const {id} = useParams()
    const [data, setData] = React.useState(productData)
    const location = useLocation()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    const productId = id
    const productFilter = data.find(product => product.id == productId)

    return (
        <div className="all-card">
            <Link className="back-btn" to={`..${search}`} relative="path">&larr;back to {type}</Link>
            <main className="single-product-page">
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
                        <button className="cart-amount-btn">-</button>
                        <button className="cart-amount-btn">1</button>
                        <button className="cart-amount-btn">+</button>
                        <button className="add-to-cart">Add to Bag</button>
                    </div>
                </div>
            </main>
        </div>
    )
}