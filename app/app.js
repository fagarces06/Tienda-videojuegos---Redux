import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
//import CantidadPokemon from './components/CantidadPokemon.jsx';
//import ComprarPokemon from './components/ComprarPokemon.jsx';
import ComprarPokemonHooks from './components/ComprarPokemon.hooks.jsx';
import CantidadPokemonHooks from './components/CantidadPokemon.hook.jsx';
import store from './redux/actions/reducers/store';

import myImg from './img/pokemon.jpg';
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import { combineReducers } from 'redux';


const BUY_POKEMON='BUY_POKEMON';
const RETURN_POKEMON='BUY_POKEMON';


const BUY_SWITH='BUY_SWITH';
const RETURN_SWITH='RETURN_SWITH';


const buy_pokemon_action=(cant)=>{
      return {
        type:BUY_POKEMON,
        payload:cant    
      }
}

const return_pokemon_action=(cant)=>{
      return {
        type:RETURN_POKEMON,
        payload: cant   
      }
}


const buy_swith_action=(cant)=>{
      return {
        type:BUY_POKEMON,
        payload:cant    
      }
}

const return_swith_action=(cant)=>{
      return {
        type:RETURN_POKEMON,
        payload: cant   
      }
}

///Reducer
const default_games_state={
      pokemon:10,
      yoshi:10

}

const default_console_state={
      ps5:30,
      switch:30

}


const games_reducer=(state=default_games_state,action)=>{
      switch(action.type){
            case BUY_POKEMON:{
                  return {
                        ...state,
                        pokemon: state.pokemon-action.payload
                  }
            }
            case RETURN_POKEMON:{
                  return {
                        ...state,
                        pokemon: state.pokemon+action.payload
                  }
            }
            default: return state;

      }
}

const console_reducer=(state=default_console_state,action)=>{
      switch(action.type){
            case BUY_SWITH:{
                  return {
                        ...state,
                        switch: state.switch-action.payload
                  }
            }
            case RETURN_SWITH:{
                  return {
                        ...state,
                        switch: state.switch+action.payload
                  }
            }
            default: return state;

      }
}


export default function App () {
      console.log(store.getState());
      return (
            <Provider store={store}>
            <div className='App container'>

                  <div className='row'>
                        <div className='col-12'>
                              <div className='card mt-5' style={{maxWidth: '370px'}}>
                                    <div className='row no-gutters'>
                                          <div className='col-4'>
                                                <img src={'app/img/pokemon.jpg'} alt='pokemon' className='card-img'></img>
                                          </div>
                                          <div className='col-8'>
                                                <div className='card-body'>
                                                      <CantidadPokemonHooks></CantidadPokemonHooks>
                                                      <ComprarPokemonHooks></ComprarPokemonHooks>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
            </Provider>
       
      )
}


////STORE , hay que pasarle el reducer
/*
const rootRedcuers=combineReducers({
      games_reducer,
      console_reducer
});
*/
//const store= createStore(games_reducer); cuando es un solo reducer
/*
const store=createStore(rootRedcuers);
console.log(store.getState()); //Devuelve el stado del reducer
store.subscribe(()=>{ // aqui se suscribe cada cambio de nuestro state
      console.log("cambio en el estado", store.getState());
})
store.dispatch(buy_pokemon_action(3)); // el dispatch es el que reparte la acciones que realiza el trabajador reducer
store.dispatch(return_pokemon_action(2));

*/