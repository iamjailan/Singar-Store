import React from "react"
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export default function Auth(){
    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })
    console.log(auth?.currentUser?.email);
    function handleChange(e){
        setFormData(prevData => {
            const {name, value} = e.target
            return {
                ...prevData,
                [name] : value
            }
        })
    }
    console.log(auth?.currentUser?.email);
    async function  signIn(){
        try{
            await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        } catch(err){
            console.error(err)
        }
    }
    async function  googleSignIn(){
        try{
            await signInWithPopup(auth, googleProvider)
        } catch(err){
            console.error(err)
        }
    }
    async function  logOut(){
        try{
            await signOut(auth)
        } catch(err){
            console.error(err)
        }
    }
    return (
        <>
            <div className="auth">
                <input 
                placeholder="Email..."
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
                 />
                <input 
                placeholder="Password..."
                value={formData.password}
                onChange={handleChange}
                name="password"
                type="password"
                 />
                <button onClick={signIn}>Sign in</button>
                <button onClick={googleSignIn}>Sign In with Google</button>
                <button onClick={logOut}>Log Out</button>
            </div>
        </>
    )
}