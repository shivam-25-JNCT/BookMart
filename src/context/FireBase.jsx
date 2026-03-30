import React, { useContext } from 'react'
import { createContext } from 'react'
import {  firebaseApp} from '../firebase';

 const FireBaseContext = createContext(null);

 export const FireBaseProvider=({children})=>{

     return(
        <FireBaseContext.Provider value={{}}>
            {children}
        </FireBaseContext.Provider>
     )
 }
//custum hook

 export const useFireBase =()=> useContext(FireBaseContext);
 
