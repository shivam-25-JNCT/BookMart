import React, { useState, useEffect, useContext } from 'react'
import { createContext } from 'react'
import { firebaseApp } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'




const FireBaseContext = createContext(null);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

export const FireBaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }

        })
    }, [])

    const signUpUserWithEmailPassword = (user, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, user, password)
    }

    // sign in
    const signinUserWithEmailAndPassword = (email, pass) => {
        return signInWithEmailAndPassword(firebaseAuth, email, pass)
    }
    const signinUserWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    const isLoggedIn = user ? true : false;
    // console.log(user);

    const handleCreateNewListing = async (name, isbn, price, imageUrl) => {
        return await addDoc(collection(firestore, "books"), {
            name,
            isbn,
            price,
            imageUrl,
            userId: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL,

        });
    }
    // retrive data from firestore
    const listAllBook = () => {
        return getDocs(collection(firestore, 'books'))
    }
    return (
        <FireBaseContext.Provider value={{ signUpUserWithEmailPassword, signinUserWithEmailAndPassword, signinUserWithGoogle, isLoggedIn, handleCreateNewListing, listAllBook }}>
            {children}
        </FireBaseContext.Provider>
    )
}
//custum hook

export const useFireBase = () => useContext(FireBaseContext);

