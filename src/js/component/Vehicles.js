import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const { store, action } = useContext(Context);

    return (
        <>
            <div className="container mt-2">
                <h2 className="text-danger">Vehicles</h2>
                <hr />
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {store.vehicles.map((item, id) => {
                        let partes = item.url.split("/");
                        let uid = partes[partes.length - 1];
                        console.log(partes)
                        return (

                            <div id="card-wrap" className="card mx-1" style={{ minWidth: "18rem" }} key={id}>
                                <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id + 1) + ".jpg"} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Model: {item.model}</p>
                                    <p className="card-text">Class: {item.vehicle_class}</p>
                                    <Link to={`/vehicle/${uid}`} type="button" className="btn btn-primary">Learn more</Link>
                                    <button type="button" className="btn btn-outline-warning">💛</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>


    );
};