import React from "react";
import { useParams } from "react-router";



export const DetailCharacters = () => {
    const params = useParams()
    return (

        <>
            <h1>Descripcion de character: {params.uid}</h1>
        </>
    )
}
