import React from "react";
import "../index.css"
import "./pages/pages.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";
import Home from "./pages/home";
import Bag from "./pages/bag/bag";
import Lists from "./pages/lists/lists";
import Help from "./pages/help/help";
import NotFound from "./pages/NotFound";
import Product from "./pages/products/product-page";
import SingleProduct from "./pages/products/single-product";
import { CartProvider } from "react-use-cart";


export default function App(){
    return (
        <>
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<Product />} />
                        <Route path="products/:id" element={<SingleProduct />} />
                        <Route path="Bag" element={<Bag />} />
                        <Route path="lists" element={<Lists />} />
                        <Route path="help" element={<Help />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </>
    )
}