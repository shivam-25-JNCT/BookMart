import React, {useState,useEffect, useContext } from 'react'
import { createContext } from 'react'
import { firebaseApp } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged } from 'firebase/auth'



const FireBaseContext = createContext(null);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FireBaseProvider = ({ children }) => {
const [user,setUser] = useState(null)
    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,(user)=>{
           if(user){
            setUser(user)
           }
           else{
            setUser(null)
           }
            
        })
    },[])
    const signUpUserWithEmailPassword = (user, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, user, password)
    }

    // sign in
    const signinUserWithEmailAndPassword = (email, pass) => {
        return signInWithEmailAndPassword(firebaseAuth, email, pass)
    }
    const signinUserWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)
const isLoggedIn = user ? true : false;

    return (
        <FireBaseContext.Provider value={{ signUpUserWithEmailPassword, signinUserWithEmailAndPassword, signinUserWithGoogle,isLoggedIn }}>
            {children}
        </FireBaseContext.Provider>
    )
}
//custum hook

export const useFireBase = () => useContext(FireBaseContext);

