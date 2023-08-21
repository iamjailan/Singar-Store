import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDXm3dEmobJl99wGz0arryBp0bjHlMd91Y",
  authDomain: "singar-68db9.firebaseapp.com",
  projectId: "singar-68db9",
  storageBucket: "singar-68db9.appspot.com",
  messagingSenderId: "941055434192",
  appId: "1:941055434192:web:8d9265fa293a61cc01edd5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()