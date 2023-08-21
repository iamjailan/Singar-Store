import React from "react";
import { useContext } from "react";
import { BsCreditCard } from "react-icons/bs";
import { ModeContext } from "../modeContext";
import { useCart } from "react-use-cart";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function CreditCard(){
    const { darkState } = useContext(ModeContext)
    const { emptyCart } = useCart()
    const inputValue = document.querySelector(".inputValue")
    const MySwal = withReactContent(Swal)
    const value = inputValue

    function handleBuy(){
        if(value?.value){
            setTimeout( function () {
                emptyCart()
            }, 3000)
            MySwal.fire({
                title: <strong>Payment Done!</strong>,
                html: <i>We will deliver it to your home soon!</i>,
                icon: 'success'
                })
        } if(!value?.value) {
            MySwal.fire({
                title: <strong>Please Fill the payment!</strong>,
                html: <i>Enter All of your information in the input's!!</i>,
                icon: 'error'
                })
        }
    }


    return (
        <article className={darkState ? "credit-page dark" : "credit-page"}>
            <h1>Enter your payment details</h1>
            <div className="credit-inputs">
                <div className="credit-number">
                    <BsCreditCard />
                    <input type="number" className="number inputValue" placeholder="Card number" />
                    <input className="inputValue" type="date" />                    
                </div>
                <div className="credit-street">
                    <input className="inputValue" type="text" placeholder="Street address" />
                </div>
                <div className="credit-optional">
                    <input className="inputValue" type="text" placeholder="Apt, unit, suit, etc (optional" />
                </div>
                <div className="credit-select">
                    <select>
                        <option>Kabul</option>
                        <option>Wardak</option>
                        <option>Herat</option>
                        <option>Mazar</option>
                    </select>
                </div>
                <section className="credit-city">
                    <input className="inputValue" id="city" placeholder="City" type="text" />
                    <section>
                        <input className="inputValue" id="state" placeholder="State" type="text" />
                        <input className="inputValue" id="zip" placeholder="Zip code" type="text" />
                    </section>
                </section>
            </div>
            <div className="pay-btn">
                <button onClick={() => handleBuy()}>Purchase</button>
            </div>
        </article>
    )
}