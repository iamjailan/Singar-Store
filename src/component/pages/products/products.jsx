import React from "react";
import productData from "./product-data";
import { useSearchParams } from "react-router-dom";

export default function Products(){
    const [products, setProducts] = React.useState(productData)
    const [filter, setFilter] = React.useState(false)
    const [searchProduct, setSearchProduct] = useSearchParams()

    const typeFilter = searchProduct.get("type")
    const displayFilter = typeFilter ? products.filter(item => item.type === typeFilter) : products

    const productsEl = displayFilter.map(product => {
        const {image, name, price, discountPrice, id} = product
        return (
            <main className="product-card" key={id}>
                <section className="product-image">
                    <img src={image} />
                </section>
                <div className="product-details">
                    <h1>{name}</h1>
                    <h1><span>{price}</span> / {discountPrice}</h1>
                </div>
            </main>
        )
    })
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
                <li onClick={() => setSearchProduct({type: "kitchen-appliance"})}>Kitchen Appliance</li>
                <li onClick={() => setSearchProduct({type: "other"})}>Other</li>
                {typeFilter ? <li onClick={() => setSearchProduct({})} >clear filter</li> : null}
            </ul>
        </section>
        <section className="all-products">
            {productsEl}
        </section>
        </div>
    )
}