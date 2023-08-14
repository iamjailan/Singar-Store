import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import productData from "./product-data";
import SingleCardPro from "./single-card-pro";

export default function SingleProduct(){
    const {id} = useParams()
    const [data, setData] = React.useState(productData)
    const [message, setMessage] = useState(false)

    const productId = id
    const productFilter = data.find(product => product.id == productId)

    return (
        <SingleCardPro 
            {...productFilter}
            item={productFilter}
            key={productFilter.id}
        />
    )
}