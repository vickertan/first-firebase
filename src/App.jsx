import { collection } from "firebase/firestore";
import { Auth } from "./components/Auth";
import { MovieForm } from "./components/MovieForm";
import { MovieList } from "./components/MovieList";
import { db, auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const App = () => {
    console.log("Render App.");
    const [user, setUser] = useState(null);

    const movieColl = collection(db, "movies");

    useEffect(() => {
        onAuthStateChanged(auth, (u) => {
            if (u) {
                setUser(u);
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
        <div>
            <h1>{user ? user.email : "no user logged in"}</h1>
            <Auth />
            <MovieForm movieColl={movieColl} />
            <MovieList movieColl={movieColl} db={db} />
        </div>
    );
};

export default App;
