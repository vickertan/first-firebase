import { useState, useEffect } from "react";
import { Movie } from "../components/Movie";
import { onSnapshot } from "firebase/firestore";

export const MovieList = ({ movieColl, db }) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        onSnapshot(movieColl, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setMovieList(data);
        });
    }, []);

    return (
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
    );
};
