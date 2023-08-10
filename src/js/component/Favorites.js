import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites ({store.favorites.length})
            </button>
            <ul className="dropdown-menu">
                {store.favorites.map((item, index) => (
                    <li id="" key={index}>
                        {item.name} <a className="trash-icon" onClick={(e) => { actions.deleteFavorites(index) }}><i className="fas fa-trash"></i></a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
