import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    const handleAddToFavorites = (item) => {
        actions.addToFavorites(item);
    };

    return (
        <>
            <div className="container mt-2">
                <h2 className="text-danger">Characters</h2>
                <hr />
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {store.characters.map((item, index) => {

                        return (
                            <div id="card-wrap" className="card mx-1" style={{ minWidth: "18rem" }} key={item.uid}>
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Gender: {item.gender}</p>
                                    <p className="card-text">Eyes: {item.eye_color}</p>
                                    <p className="card-text">Birth year: {item.birth_year}</p>
                                    <div className="btn-container">
                                        <Link to={`/character/${item.uid}`} type="button" className="btn btn-outline-danger">Learn more</Link>
                                        <button type="button" className="btn btn-outline-warning" onClick={() => handleAddToFavorites(item)}>Add favorites</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};
