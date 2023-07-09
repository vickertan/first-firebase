import { collection } from "firebase/firestore";
import { Auth } from "./components/Auth";
import { MovieForm } from "./components/MovieForm";
import { MovieList } from "./components/MovieList";
import { db, auth } from "./config/firebase";

const App = () => {
    console.log("Render App.");

    const movieColl = collection(db, "movies");

    return (
        <div>
            <h1>{auth?.currentUser?.email}</h1>
            <Auth />
            <MovieForm movieColl={movieColl} />
            <MovieList movieColl={movieColl} db={db} />
        </div>
    );
};

export default App;
