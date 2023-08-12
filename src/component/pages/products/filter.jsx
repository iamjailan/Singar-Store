import React from "react";
import { NavLink } from "react-router-dom";

export default  function FilterProduct(){
    const [filter, setFilter] = React.useState(false)
    return(
        <section className="filter-product">
        <h1 className="filter-title">Filter Products</h1>
            <ul>
                <li>All</li>
                <li>Kids Clothes</li>
                <li>Computers</li>
                <li>Mobiles</li>
                <li>Home Appliance</li>
                <li>Office Appliance</li>
                <li>Office Appliance</li>
                <li>Kitchen Appliance</li>
                <li>Other</li>
                {filter ? <li>clear filter</li> : null}
            </ul>
        </section>
    )
}