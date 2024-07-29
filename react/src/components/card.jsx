/* eslint-disable react/prop-types */
import React from "react";
/* {
    id: "4ddbe251-72af-495e-8e9d-869217e1d92a",
    name: "Bouvier des Flandres",
    description: "The Bouvier des Flandres is a large and powerful breed of dog from the Flanders region of Belgium. These dogs are very large in size, with a thick double coat of wire-haired fur. They have a dignified but energetic demeanor, making them excellent working dogs. They are highly intelligent and trainable, with an instinct to protect their family and property. They are brave and loyal, with an independent nature that makes them well suited for herding and guard work.",
}, */


function BreedCard(props) {
    return (
        <div style={{
            border: "1px solid #fff",
        }}>
            <h2>
                {props.breed.name}
            </h2>
            <p>
                {props.breed.description}
            </p>
        </div>
    )
}

export default BreedCard;