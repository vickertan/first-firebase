import { Movie } from "../components/Movie";

export const MovieList = ({ movieList, db }) => {
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
