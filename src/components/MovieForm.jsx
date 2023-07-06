import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { auth } from "../config/firebase";

export const MovieForm = ({ movieColl }) => {
    const [newMovieTitle, setNewMovieTitle] = useState("");
    const [newReleaseDate, setNewReleaseDate] = useState(0);
    const [newMovieOscar, setNewMovieOscar] = useState(false);

    const submitNewMovie = async () => {
        try {
            await addDoc(movieColl, {
                title: newMovieTitle,
                releaseDate: newReleaseDate,
                receivedAnOscar: newMovieOscar,
                userId: auth?.currentUser?.uid,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
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
    );
};
