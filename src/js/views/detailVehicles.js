import React from "react";
import { useParams } from "react-router";



export const DetailVehicles = () => {
    const params = useParams()
    return (

        <>
            <h1>Descripcion de Vehicle: {params.uid}</h1>
        </>
    )
}
