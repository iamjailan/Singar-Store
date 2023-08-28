import React, { useContext, useEffect } from 'react'
import { LoginState } from '../modeContext'
import { useNavigate, useNavigation } from 'react-router-dom'

export default function ProtectPage({children}) {
    const { login, setLogin } = useContext(LoginState)
    const isLoggedIn = localStorage.getItem("loginState")
    const navigate = useNavigate()

    if(!login){
            return (
                navigate("/login?please login first and the go!")
            )
    }
    return children;

}
