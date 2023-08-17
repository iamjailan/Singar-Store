import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { BsBagFill } from "react-icons/bs";
import { ModeContext } from "../modeContext";
import { Link, Outlet, redirect } from "react-router-dom";
import SharedBag from "./sharedLayout";

export default function Purchase(){
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
    const { darkState } = useContext(ModeContext)
    const [varQua, setVarQua] = React.useState(cartTotal)

    if(isEmpty){
        return (
            <section className={darkState ? "empty-purchase dark" : "empty-purchase"}>
                <h1>Look Like your bag is Empty</h1>
                <Link to="/products">Visit Products</Link>
            </section>
        )
    }
     return (
        <article className={darkState ? "purchase dark" : "purchase"}>
            <header className="purchase-header">
                <BsBagFill className="purchase-icon" />
                <h1>My Bag</h1>
            </header>
            <main className="purchase-flex">
                <section className="purchase-card">
                   <div className="purchase-all-cards">
                   {
                    items.map(item => {
                        return (
                            <article className="purchase-details" key={item.id}>
                        <img src={item.image} />
                            <div className="purchase-name">
                                <h2 className="purchase-h1">{item.name}</h2>
                                <span>{item.rating}</span>
                            </div>
                            <div className="purchase-amount">
                                <h2 className="purchase-h1">Each</h2>
                                <p>{item.price} AFG</p>
                            </div>
                            <div className="purchase-quantity">
                                <h2 className="purchase-h1">Quantity</h2>
                                <p>{item.quantity}</p>
                            </div>
                            <div className="purchase-total">
                                <h2 className="purchase-h1">Total</h2>
                                <p>{item.itemTotal} AFG</p>
                            </div>
                            <div className="purchase-button">
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                                {/* <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button> */}
                            </div>
                        </article>
                        )
                    })
                   }
                   </div>
                    <section className="bottom-details">
                        <h1>{totalItems} item's</h1>
                        <h1>{cartTotal} AFG</h1>
                    </section>
                </section>
                <div className="payment">
                <div className="pay-card">
                    <p className="pay-promo">ENTER PROMO ODE</p>
                    <div className="pay-input">
                        <input className="number" type="number" />
                        <button>Discount</button>
                    </div>
                    <div className="pay-ship">
                                <h2>Shipping Cost</h2>
                                <h2>{ 10 * totalItems} AFG</h2>
                    </div>
                    <div className="pay-discount">
                                <h2>Discount</h2>
                                <h2>{totalItems * 5} AFG</h2>
                    </div>    
                    <div className="pay-tax">
                        <h2>Tax</h2>
                        <h2>{totalItems * 10} AFG</h2>
                    </div>
                    <div className="pay-final">
                        <h1>Estimated Total</h1>
                        <h2>{cartTotal + totalItems * 10 + totalItems * 10 - totalItems * 5} AFG</h2>
                    </div>
                    <div className="pay-ads">
                        <h2>or 4  interested free payment of 10.00 AFG with <span>Azi-Pay</span></h2>
                        <h3>You're <span>100.00</span> AFG away from free shipping!</h3>
                    </div>
                    <div>
                    </div>
                    <SharedBag />
                </div>
                </div>
            </main>
        </article>
    )
}