import React, { useContext } from 'react'
import { LoginState } from '../modeContext'
import { Navigate } from 'react-router-dom'

export default function ProtectPage({children}) {
    const { login } = useContext(LoginState)
    if(!login){
        return (
            <Navigate to="/login" />
        )
    }
    return children
}
