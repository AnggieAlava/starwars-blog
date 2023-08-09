import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
    const { store } = useContext(Context);

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites ({store.favorites.length})
            </button>
            <ul className="dropdown-menu">
                {store.favorites.map((index) => (
                    <li key={index}>
                        {store.characters[index].name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
