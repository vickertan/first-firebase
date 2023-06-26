import { useEffect, useState } from "react";
import { Auth } from "./components/Auth";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

const App = () => {
    const [movieList, setMovieList] = useState([]);
    const movieColl = collection(db, "movies");

    useEffect(() => {
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
            <Auth />

            <div>
                <input type="text" placeholder="Movie title..." />
                <input type="number" placeholder="Release date..." />
                <input id="oscarCheck" type="checkbox" />
                <label htmlFor="oscarCheck">Received an Oscar</label>
                <input type="submit" />
            </div>
            <div>
                {movieList.map((movie) => (
                    <div key={movie.id}>
                        <h1
                            style={{
                                color: movie.receivedAnOscar ? "gold" : "black",
                            }}
                        >
                            {movie.title}
                        </h1>
                        <p>Date: {movie.releaseDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
