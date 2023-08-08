import React from "react";
import "../index.css"
import "./pages/pages.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";
import Home from "./pages/home";
import Product from "./pages/products/product";
import Pricing from "./pages/pricing/pricing";
import Lists from "./pages/lists/lists";
import Help from "./pages/help/help";
import NotFound from "./pages/NotFound";


export default function App(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="lists" element={<Lists />} />
                    <Route path="help" element={<Help />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}