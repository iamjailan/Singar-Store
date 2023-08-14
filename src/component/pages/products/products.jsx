import React, { useEffect, useState } from "react";
import productData from "./product-data";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import ProductCards from "./productCard";

export default function Products(){
    const [products, setProducts] = React.useState(productData)
    const [searchProduct, setSearchProduct] = useSearchParams()
    const [displayMessage, setDisplayMessage] = useState(false)

    const typeFilter = searchProduct.get("type")

    const displayFilter = typeFilter ? products.filter(item => item.type === typeFilter) : products

    let timeOut

    function handleMessage(){
        setDisplayMessage(prevMessage => !prevMessage)
        timeOut = setTimeout(() => {
            setDisplayMessage(false)
        }, 1500)
    }
    return (
        <div>
            <section className="filter-product">
            <h1 className="filter-title">Filter Products</h1>
                <ul>
                    {typeFilter ? <li onClick={() => setSearchProduct({})}>All</li> : null}
                    <li onClick={() => setSearchProduct({type: "kids-cloth"})}>Kids Clothes</li>
                    <li onClick={() => setSearchProduct({type: "computers"})}>Computers</li>
                    <li onClick={() => setSearchProduct({type: "mobiles"})}>Mobiles</li>
                    <li onClick={() => setSearchProduct({type: "home-appliance"})}>Home Appliance</li>
                    <li onClick={() => setSearchProduct({type: "office-appliance"})}>Office Appliance</li>
                    <li onClick={() => setSearchProduct({type: "afghani"})}>Afghani Clothes</li>
                    <li onClick={() => setSearchProduct({type: "other"})}>Other</li>
                    {typeFilter ? <li onClick={() => setSearchProduct({})} >clear filter</li> : null}
                </ul>
            </section>
            <section className="all-products" id="all-pro">
                <div className={displayMessage ? "added-message" : "added-message hide"}>
                    <h1>Item added to Bag</h1>
                </div>
                {
                    displayFilter.map((item, index) => {
                        return (
                                <ProductCards
                                    {...item}
                                    id={item.id}
                                    item={item}
                                    handleMessage={handleMessage}
                                    key={item.id}
                                />
                        )
                    })
                }
            </section>
        </div>
    )
}