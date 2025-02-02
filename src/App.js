import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import pokemonImage from './img/pokemon.jpg'; 
import CantidadPokemon from './components/CantidadPokemon'
import CompraPokemon from './components/CompraPokemon'
import store from './redux/store';

import {Provider} from 'react-redux';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';

function App() {
  console.log(store.getState());
  return (
    <Provider store= {store}>
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5" style={{ maxWidth: '370px' }}>
            <div className="row g-0"> 
              <div className="col-4">
                <img src={pokemonImage} alt="pokemon" className="card-img" />
              </div>
              <div className="col-8 d-flex align-items-center">
                <div className='card-title h3 text-center'>
                  <CantidadPokemon/>

              
                <p className="m-2 h3 "></p> {/* Texto de prueba */}
                <CompraPokemon/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 mt border-top pt-3'>
          <BuscadorPokemon/>
        
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
