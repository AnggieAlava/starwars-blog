import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailCharacters = () => {
    const { store, action } = useContext(Context);
    const { uid } = useParams();

    // Esta funcion me ayuda a encontrar el character especifico
    const character = store.characters.find(item => item.uid === uid);

    if (!character) {
        return <Link to={"*"}></Link>
    }

    return (
        <div className="container">
            <div className="card mx-1" id="detail-card" style={{ minWidth: "18rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{character.name}</h1>
                            <p className="card-text" id="description">
                                Star Wars, también conocida como "La Guerra de las Galaxias", es una icónica saga de ciencia ficción creada por George Lucas. Ambientada en una galaxia muy, muy lejana, la historia sigue la lucha entre la Orden Jedi y los Sith, dos poderosas facciones que dominan el lado luminoso y oscuro de la Fuerza, una energía mística que otorga habilidades especiales. En medio de este conflicto épico, nacen héroes y villanos que luchan por el destino de la galaxia.
                                La trama se centra en la familia Skywalker, cuyos miembros juegan un papel crucial en el equilibrio de la Fuerza. Con icónicos personajes como Luke Skywalker, la Princesa Leia, Darth Vader y el maestro Yoda, la saga explora temas de poder, redención, amor y sacrificio. Los viajes interplanetarios, las épicas batallas espaciales y los duelos de sables de luz son elementos distintivos de Star Wars.
                                A lo largo de las películas, los personajes se embarcan en misiones para derrotar al malvado Imperio Galáctico, restaurar la paz en la República y enfrentarse a la tiranía de los Sith. La rica mitología, las culturas alienígenas y los mundos exóticos dan vida a esta galaxia diversa y vibrante. Star Wars ha capturado la imaginación de generaciones con su narrativa épica, efectos visuales innovadores y una banda sonora icónica compuesta por John Williams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr id="detail-line" />
            <div className="detail-container">
                <p>Name <br /> {character.name}</p>
                <p>Birth year <br /> {character.birth_year}</p>
                <p>Gender <br /> {character.gender}</p>
                <p>Height <br /> {character.height}</p>
                <p>Skin color <br /> {character.skin_color}</p>
                <p>Eye color <br /> {character.eye_color}</p>
            </div>
        </div>
    );
};
