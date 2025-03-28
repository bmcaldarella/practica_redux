import { BUY_POKEMON } from "../gameShopAction";
import { RETURN_POKEMON } from "../gameShopAction";

const default_game_shop = {
    pokemon: 130
};

const game_shop = (state= default_game_shop, action) => {
    switch (action.type) {
        case BUY_POKEMON:
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
            case RETURN_POKEMON:
                return {
                    ...state,
                    pokemon: state.pokemon + action.payload
                }
            default: return state;
    }  
    
 

   
}

export default game_shop;