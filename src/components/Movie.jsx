import { doc, deleteDoc } from "firebase/firestore";

export const Movie = ({ db, id, title, receivedAnOscar, releaseDate }) => {
    const deleteMovie = async (id) => {
        try {
            const movieDoc = doc(db, "movies", id);
            await deleteDoc(movieDoc);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div key={id}>
            <h1
                style={{
                    color: receivedAnOscar ? "gold" : "black",
                }}
            >
                {title}
            </h1>
            <p>Date: {releaseDate}</p>
            <button onClick={() => deleteMovie(id)}>Delete</button>
            <input type="text" placeholder="edit title..." />
        </div>
    );
};
