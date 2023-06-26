import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeUErVESIfKsl4AX40hYPzX4FgwmMOzpw",
    authDomain: "rest-time-6223c.firebaseapp.com",
    projectId: "rest-time-6223c",
    storageBucket: "rest-time-6223c.appspot.com",
    messagingSenderId: "822191898076",
    appId: "1:822191898076:web:64e3b5f7013fa423dde319",
    measurementId: "G-ZBXKM49PJD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
