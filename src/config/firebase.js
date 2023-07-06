import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvq1Zn6zOil997s6QaWR-65WHCUuB56fQ",
    authDomain: "react-with-firebase2.firebaseapp.com",
    projectId: "react-with-firebase2",
    storageBucket: "react-with-firebase2.appspot.com",
    messagingSenderId: "653928676745",
    appId: "1:653928676745:web:d3a220529932cbf68cb558",
    measurementId: "G-43PTTZ6JQX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
