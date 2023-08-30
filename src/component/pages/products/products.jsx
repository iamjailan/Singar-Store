import React, { useEffect, useState } from "react";
import productData from "./product-data";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import ProductCards from "./productCard";
import { useContext } from "react";
import { ModeContext } from "../modeContext";
import { AiOutlineSearch } from "react-icons/ai"
import FillError from "../addProduct/fill-error";

export default function Products(){
    const [products, setProducts] = React.useState(productData)
    const [searchProduct, setSearchProduct] = useSearchParams()
    const [displayMessage, setDisplayMessage] = useState(false)
    const [ searchForItems, setSearchForItems ] = useSearchParams()
    const { darkState } = useContext(ModeContext)
    const [ findItems, setFindItem ] = React.useState("")
    const [ findError, setFindError ] = React.useState(false)

    const typeFilter = searchProduct.get("type")

    const displayFilter = typeFilter ? products.filter(item => item.type === typeFilter) : products

    let timeOut

    function handleMessage(){
        setDisplayMessage(prevMessage => !prevMessage)
        timeOut = setTimeout(() => {
            setDisplayMessage(false)
        }, 1500)
    }
    function searchItems(){
        if(!findItems){
            setFindError(true)
            setTimeout(() => {
                setFindError(false)
            }, 2000)
        }
        setSearchForItems({ type: findItems })
    }
    return (
        <div>
            <section className={darkState ? "filter-product dark" : "filter-product"}>
            <div className="find-items">
            <h1>Find Products</h1>
                <section className="find-flex">
                    <input 
                    type="text"
                    name="searchItem" 
                    placeholder="e.g. Mobile" 
                    value={findItems} 
                    onChange={(e) => setFindItem(e.target.value)}
                     />
                    <AiOutlineSearch onClick={searchItems} className="find-icon" />
                </section>
                {findError ? <FillError cssClass="error" text="Please Enter Item Name!" /> : null}
            </div>
            <h1 className="filter-title">Filter Products</h1>
                <ul>
                    {typeFilter ? <li onClick={() => setSearchProduct({})}>All</li> : null}
                    <li onClick={() => setSearchProduct({type: "Kids"})}>Kids Clothes</li>
                    <li onClick={() => setSearchProduct({type: "Computer"})}>Computer</li>
                    <li onClick={() => setSearchProduct({type: "Mobile"})}>Mobile</li>
                    <li onClick={() => setSearchProduct({type: "Home Appliance"})}>Home Appliance</li>
                    <li onClick={() => setSearchProduct({type: "Office Appliance"})}>Office Appliance</li>
                    <li onClick={() => setSearchProduct({type: "Afghani"})}>Afghani Clothes</li>
                    <li onClick={() => setSearchProduct({type: "Other"})}>Other</li>
                    {typeFilter ? <li onClick={() => setSearchProduct({})} >clear filter</li> : null}
                </ul>
            </section>
            <section className="all-products" id="all-pro">
                <div className={displayMessage ? "added-message" : "added-message hide"}>
                    <h1>Item added to Bag</h1>
                </div>
                {
                    displayFilter.length <= 0 ?
                    <div className="empty-search">
                        <h1>Sorry, the item you searched for could not be found.</h1>
                    </div> : 
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