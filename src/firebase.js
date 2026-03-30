import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHJBjnP34gs2t7KjlOA76K0mDFwppSxSc",
  authDomain: "bookcart-ad564.firebaseapp.com",
  projectId: "bookcart-ad564",
  storageBucket: "bookcart-ad564.firebasestorage.app",
  messagingSenderId: "615920651466",
  appId: "1:615920651466:web:91b1cb6a7abe7fbf943833"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);