import React, { useEffect } from "react";
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
import HelpNavbar from "./pages/help/help-navbar";
import About from "./pages/help/about";
import Contact from "./pages/help/contact";
import { ModeContext } from "./pages/modeContext"

export default function App(){
    const [darkState, setDarkState] = React.useState(false)
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setDarkState(darkModeMediaQuery.matches);
    
        const handleDarkModeChange = (event) => {
          setDarkState(event.matches);
        };
    
        darkModeMediaQuery.addListener(handleDarkModeChange);
    
        return () => {
          darkModeMediaQuery.removeListener(handleDarkModeChange);
        };
      }, []);
    return (
        <>
        <BrowserRouter>
        <ModeContext.Provider value={{darkState, setDarkState}}>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<Product />} />
                        <Route path="products/:id" element={<SingleProduct />} />
                        <Route path="Bag" element={<Bag />} />
                        <Route path="lists" element={<Lists />} />
                        <Route path="help" element={<HelpNavbar />}>
                            <Route index element={<Help />}/>
                            <Route path="about" element={<About />}/>
                            <Route path="contact" element={<Contact />}/>
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </CartProvider>
        </ModeContext.Provider>
        </BrowserRouter>
        </>
    )
}