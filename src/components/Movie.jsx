import { useState, useRef } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

export const Movie = ({ db, id, title, receivedAnOscar, releaseDate }) => {
    console.log(`${title} rendered`);

    const newTitleRef = useRef(null);
    const [newTitle, setNewTitle] = useState("");

    const deleteMovie = async (id) => {
        const movieDoc = doc(db, "movies", id);
        await deleteDoc(movieDoc);
        console.log("movie deleted");
    };

    const updateTitle = async (id) => {
        const movieDoc = doc(db, "movies", id);
        await updateDoc(movieDoc, { title: newTitle });
        console.log("title updated");
        newTitleRef.current.value = "";
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
            <input
                ref={newTitleRef}
                type="text"
                placeholder="edit title..."
                onChange={(e) => {
                    setNewTitle(e.target.value);
                }}
            />
            <button onClick={() => updateTitle(id)}>Update Title</button>
        </div>
    );
};
