import React from "react";
import { useDispatch } from "react-redux";
import { buy_pokemon_action, return_pokemon_action } from "../redux/gameShopAction";

const CompraPokemon = () => {
    const dispatch = useDispatch(); // Hook para acceder a dispatch de Redux

    return (
        <>
            <button 
                className="btn btn-dark btn-sm mb-2" 
                onClick={() => dispatch(buy_pokemon_action(1))} // Se despacha la acción directamente
            >
                Comprar Pokémon
            </button>

            <button 
                className="btn btn-dark btn-sm" 
                onClick={() => dispatch(return_pokemon_action(1))} // Se despacha la acción directamente
            >
                Devolver Pokémon
            </button>
        </>
    );
};

export default CompraPokemon;
