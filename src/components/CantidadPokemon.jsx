import React from "react";
import { useSelector } from "react-redux";

const CantidadPokemon = () => {
    const pokemon = useSelector(state => state.game_shop.pokemon); // Obtener el estado con useSelector

    return (
        <>
            Unidades: {pokemon}
        </>
    );
};

export default CantidadPokemon;
