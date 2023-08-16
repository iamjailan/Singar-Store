import React from "react";
import { useCart } from "react-use-cart";

export default function Purchase(){
    const { totalItems } = useCart()
    return (
        <main>
            <h1>Purchase Page {totalItems}</h1>
        </main>
    )
}