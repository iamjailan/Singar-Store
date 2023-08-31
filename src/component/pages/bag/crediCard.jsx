import React from "react";
import { useContext } from "react";
import { BsCreditCard } from "react-icons/bs";
import { ModeContext } from "../modeContext";
import { useCart } from "react-use-cart";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function CreditCard(){
    const [ inputText, setInputText ] = React.useState({
        cardNumber: "",
        date: "",
        streetAddress: "",
        unit: "",
        selection: "",
        city: "",
        zip: "",
        state: ""
    })
    const { darkState } = useContext(ModeContext)
    const { emptyCart } = useCart()
    const MySwal = withReactContent(Swal)

    function handleBuy(){
        // if(!inputText.cardNumber) {
        //     return (
        //         MySwal.fire({
        //             title: <strong>Please Fill the payment!</strong>,
        //             html: <i>Enter All of your information in the input's!!</i>,
        //             icon: 'error'
        //             })
        //     )
        // }else{
        //     return (  
        //         // setTimeout( function () {
        //         //     emptyCart()
        //         // }, 3000)
        //         MySwal.fire({
        //             title: <strong>Payment Done!</strong>,
        //             html: <i>We will deliver it to your home soon!</i>,
        //             icon: 'success'
        //             })
        //     )
        // } 
        setTimeout(() => {
                    emptyCart()
                }, 3000)

    }


    return (
        <article className={darkState ? "credit-page dark" : "credit-page"}>
            <h1>Enter your payment details</h1>
            <div className="credit-inputs">
                <div className="credit-number">
                    <BsCreditCard />
                    <input 
                    type="number" 
                    className="number inputValue" 
                    placeholder="Card number"
                    value={inputText.cardNumber}
                    onChange={e => setInputText(e.target.value)}
                     />
                    <input 
                    className="inputValue" 
                    type="date"
                    value={inputText.date}
                    onChange={e => setInputText(e.target.value)}
                     />                    
                </div>
                <div className="credit-street">
                    <input 
                    className="inputValue" 
                    type="text" 
                    placeholder="Street address"
                    value={inputText.streetAddress}
                    onChange={e => setInputText(e.target.value)}
                     />
                </div>
                <div className="credit-optional">
                    <input 
                    className="inputValue" 
                    type="text" 
                    placeholder="Apt, unit, suit, etc"
                    value={inputText.unit}
                    onChange={e => setInputText(e.target.value)}
                     />
                </div>
                <div className="credit-select">
                    <select value={inputText.selection} onChange={e => setInputText(e.target.value)}>
                        <option value="kabul">Kabul</option>
                        <option value="wardak">Wardak</option>
                        <option value="herat">Herat</option>
                        <option value="mazar">Mazar</option>
                    </select>
                </div>
                <section className="credit-city">
                    <input 
                    className="inputValue" 
                    id="city" 
                    placeholder="City" 
                    type="text" 
                    value={inputText.city}
                    onChange={e => setInputText(e.target.value)}
                    />
                    <section>
                        <input 
                        className="inputValue" 
                        id="state" 
                        placeholder="State" 
                        type="text" 
                        value={inputText.state}
                        onChange={e => setInputText(e.target.value)}
                        />
                        <input 
                        className="inputValue" 
                        id="zip" 
                        placeholder="Zip code" 
                        type="text"
                        value={inputText.zip}
                        onChange={e => setInputText(e.target.value)}
                         />
                    </section>
                </section>
            </div>
            <div className="pay-btn">
                <button onClick={() => handleBuy()}>Purchase</button>
            </div>
        </article>
    )
}