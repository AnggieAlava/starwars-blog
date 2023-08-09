import React from "react";
import { useParams } from "react-router";



export const DetailPlanets = () => {
    const params = useParams()
    return (

        <>
            <h1>Descripcion de planets: {params.uid}</h1>
        </>
    )
}
