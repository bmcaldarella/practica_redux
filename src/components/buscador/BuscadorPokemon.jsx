import React from "react";

const BuscadorPokemon = () => {
    return (
        <div className="from-group"><label htmlFor="buscar_pokemon" className="text-white">Buscar Pokemon</label><input type="text" className="form-control" id="buscador_pokemon" value="pikachu" /><button className="btn btn-primary mt-3">Enviar</button></div>
    )
}
export default BuscadorPokemon;