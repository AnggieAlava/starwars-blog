import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const handleAddToFavorites = (item) => {
        actions.addToFavorites(item);
    };

    return (
        <>
            <div className="container mt-2">
                <h2 className="text-danger">Planets</h2>
                <hr />
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {store.planets.map((item) => {
                        return (
                            <div id="card-wrap" className="card mx-1" style={{ minWidth: "18rem" }} key={item.uid}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                    }}
                                    className="card-img-top"
                                />
                                <div className="card-body planets-card">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Population: {item.population}</p>
                                    <p className="card-text">Terrain: {item.terrain}</p>
                                    <div className="btn-container">
                                        <Link to={`/planet/${item.uid}`} type="button" className="btn btn-primary">Learn more</Link>
                                        <button type="button" className="btn btn-outline-warning" onClick={() => handleAddToFavorites(item)} >Add favorites</button>
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