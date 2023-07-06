import { useEffect, useState } from "react";
import { Auth } from "./components/Auth";
import { MovieForm } from "./components/MovieForm";
import { Movie } from "./components/Movie";
import { db, auth } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

const App = () => {
    console.log("Render App.");
    const [movieList, setMovieList] = useState([]);

    const movieColl = collection(db, "movies");

    useEffect(() => {
        console.log("getMovieList");
        const getMovieList = async () => {
            try {
                const data = await getDocs(movieColl);
                const fData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setMovieList(fData);
            } catch (err) {
                console.error(err);
            }
        };

        getMovieList();
    }, []);

    return (
        <div>
            <h1>{auth?.currentUser?.email}</h1>
            <Auth />
            <MovieForm movieColl={movieColl} />

            <div>
                {movieList.map((movie) => (
                    <Movie
                        db={db}
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        receivedAnOscar={movie.receivedAnOscar}
                        releaseDate={movie.releaseDate}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
