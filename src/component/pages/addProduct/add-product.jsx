import React from "react";
import "./add-product.css"
import { useContext } from "react";
import { ModeContext } from "../modeContext";
import FillError from "./fill-error";
import { useNavigation } from "react-router-dom";

export default function AddProduct(){
    const { darkState } = useContext(ModeContext)
    const [isFilled, setIsFilled] = React.useState(false)
    const [ formData, setFormData ] = React.useState({
        productName: "",
        productType: "",
        productPrice: "",
        productImage1: "",
        productImage2: "",
        productImage3: "",
        productRating: "",
        productReview: "",
        productFinal: "",
        productDetail: "",
    })

    function sendInfo(){
        if(!formData.productDetail){
            setIsFilled(true)
            setTimeout(() => {
                setIsFilled(false)
            }, 3000)
        }
        setFormData([])
    }

    function handleChange(e){
        setFormData(prevData => {
            const {value, name} = e.target
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    return (
        <main className={darkState ? "add-product dark" : "add-product"}>
            <h1 className="add-product-title">Enter Product Information</h1>
                <div className="add-form" >
                    <div>
                        <label>Product Name</label>
                        <section>
                            <input name="productName" onChange={handleChange} value={formData.productName} required placeholder="e. g. MacBook" type="text" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product name!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Type</label>
                        <section>
                            <input name="productType" onChange={handleChange} value={formData.productType} required placeholder="e. g. others" type="text" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product type!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Price</label>
                        <section>
                            <input name="productPrice" onChange={handleChange} value={formData.productPrice} required className="number" placeholder="e. g. 210" type="number" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product price!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Image-1 URL</label>
                        <section>
                            <input name="productImage1" onChange={handleChange} value={formData.productImage1} required placeholder="First Image URL" type="url" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product image url!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Image-2 URL</label>
                        <section>
                            <input name="productImage2" onChange={handleChange} value={formData.productImage2} required placeholder="Second Image URL" type="url" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product image url!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Image-3 URL</label>
                        <section>
                            <input name="productImage3" onChange={handleChange} value={formData.productImage3} required placeholder="Third Image URL" type="url" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product image url!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Rating</label>
                        <section>
                            <input name="productRating" onChange={handleChange} value={formData.productRating} required placeholder="e. g. ⭐⭐" type="text" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product rating star!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Review Amount</label>
                        <section>
                            <input name="productReview" onChange={handleChange} value={formData.productReview} required placeholder="e. g. 230" className="number" type="number" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product review number!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Details</label>
                        <section>
                            <input name="productDetail" onChange={handleChange} value={formData.productDetail} required placeholder="e. g. long then 100 line" type="text" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter details!" /> : null}
                        </section>
                    </div>
                    <div>
                        <label>Product Final Price</label>
                        <section>
                            <input name="productFinal" onChange={handleChange} value={formData.productFinal} required placeholder="e. g. 200" className="number" type="number" />
                            {isFilled ? <FillError cssClass="red-fill" text="Please enter product final price!" /> : null}
                        </section>
                    </div>
                    <button className="send-product" type="submit" onClick={sendInfo}>Send to DataBase</button>
                </div>
        </main>
    )
}