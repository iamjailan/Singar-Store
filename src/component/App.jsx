import React from "react";
import "../index.css"
import "./pages/pages.css"
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";


export default function App(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>

                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}