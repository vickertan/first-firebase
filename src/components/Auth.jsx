import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithRedirect,
    signOut,
} from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("account created");
        } catch (err) {
            console.error(err);
        }
    };

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("logged in");
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithRedirect(auth, googleProvider);
            console.log("logged in with Google");
        } catch (err) {
            console.error(err);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            console.log("logged out");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Email..."
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Password..."
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={createAccount}>Register</button>

            <button onClick={logIn}>Log In</button>

            <button onClick={signInWithGoogle}>Sign In with Google</button>

            <button onClick={logOut}>Log Out</button>
        </div>
    );
};
