import { useEffect, useState } from "react";
import { Auth } from "./components/Auth";
import { Movie } from "./components/Movie";
import { db } from "./config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const App = () => {
    const [movieList, setMovieList] = useState([]);

    const [newMovieTitle, setNewMovieTitle] = useState("");
    const [newReleaseDate, setNewReleaseDate] = useState(0);
    const [newMovieOscar, setNewMovieOscar] = useState(false);

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
    }, [movieColl]);

    const submitNewMovie = async () => {
        try {
            await addDoc(movieColl, {
                title: newMovieTitle,
                releaseDate: newReleaseDate,
                receivedAnOscar: newMovieOscar,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <Auth />

            <div>
                <input
                    type="text"
                    placeholder="Movie title..."
                    onChange={(e) => setNewMovieTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Release date..."
                    onChange={(e) => setNewReleaseDate(Number(e.target.value))}
                />
                <input
                    id="oscar"
                    type="checkbox"
                    onChange={(e) => setNewMovieOscar(e.target.checked)}
                />
                <label htmlFor="oscar">Received an Oscar</label>
                <input type="submit" onClick={submitNewMovie} />
            </div>
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
