import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom"
import { AiFillDelete, AiOutlineClear } from "react-icons/ai"
 
export default function Bag(){
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
    if(isEmpty){
        return (
            <div className="empty-bag">
                <h1>Your Bag is Empty</h1>
                <Link to="/products">Return to Products</Link>
            </div>
        )
    }
    return (
        <main>
            <div className="bag-lists">
                <h1>My Bag's List</h1>
            {items.map((item, index) => {
                return (
                <div className="bag-card" key={index}>
                    <img src={item.image} className="bag-image" />
                    <section className="bag-details">
                        <h1>${item.price}</h1>
                        <h1>{item.name}</h1>
                    </section>
                    <div className="bag-btn">
                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <button className="total-qu">{item.quantity}</button>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <h1 className="bag-price">Item Total: ${item.itemTotal}</h1>
                    <h1 className="bag-price">Item Quantity: {item.quantity}</h1>
                    <button className="bag-remove" onClick={() => removeItem(item.id)}><AiFillDelete /></button>
                </div>
            )
            })}
           </div>
           <section className="bag-total">
                <h1>Total Items: {totalItems}</h1>
                <h1>Total Price: ${cartTotal}</h1>
                <button className="clear-bag" onClick={() => emptyCart()}><AiOutlineClear /></button>
           </section>
        </main>
    )
}