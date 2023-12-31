import React, { useEffect } from "react";
import "../index.css"
import "./pages/pages.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";
import Home from "./pages/home";
import Bag from "./pages/bag/bag";
import Profile from "./pages/profile/profile";
import Help from "./pages/help/help";
import NotFound from "./pages/NotFound";
import Product from "./pages/products/product-page";
import SingleProduct from "./pages/products/single-product";
import { CartProvider } from "react-use-cart";
import HelpNavbar from "./pages/help/help-navbar";
import About from "./pages/help/about";
import Contact from "./pages/help/contact";
import { LoginState, ModeContext } from "./pages/modeContext"
import Purchase from "./pages/bag/purchase";
import CreditCard from "./pages/bag/crediCard";
import AziPay from "./pages/bag/aziPay";
import Login from "./pages/profile/login";
import ProtectPage from "./pages/profile/ProtectPage";
import AddProduct from "./pages/addProduct/add-product";

export default function App(){
    const [darkState, setDarkState] = React.useState(false)
    const [login, setLogin] = React.useState(false)
    const [ loginError, setLoginError ] = React.useState(false)

    useEffect(() => {
        const loginState = localStorage.getItem("loginState");
        if(loginState){
            setLogin(loginState === 'true')
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('loginState', login)
    }, [login])

    return (
        <>
        <BrowserRouter>
        <ModeContext.Provider value={{darkState, setDarkState}}>
        <LoginState.Provider value={{login, setLogin, loginError, setLoginError}}>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<Product />} />
                        <Route path="products/:id" element={<SingleProduct />} />
                        <Route path="Bag" element={<Bag />} />
                        <Route path="purchase" element={<Purchase />}>
                            <Route path="creditCard" element={<CreditCard />} />
                            <Route path="aziPay" element={<AziPay />} />
                        </Route>
                        <Route path="help" element={<HelpNavbar />}>
                            <Route index element={<Help />}/>
                            <Route path="about" element={<About />}/>
                            <Route path="contact" element={<Contact />}/>
                        </Route>
                        <Route path="profile" element={
                            <ProtectPage>
                                <Profile />
                            </ProtectPage>
                        }>

                        </Route>
                        <Route path="login" element={login ? <Profile /> : <Login />} />
                        <Route path="add-product" element={
                            <ProtectPage>
                                <AddProduct />
                            </ProtectPage>
                        } />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </CartProvider>
        </LoginState.Provider>
        </ModeContext.Provider>
        </BrowserRouter>
        </>
    )
}