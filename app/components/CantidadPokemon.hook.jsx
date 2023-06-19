import React from "react";
import { useSelector } from "react-redux";
const CantidadPokemonHooks=()=>{
  const varunidades=useSelector((state)=> state.game_shop.pokemon);
    return (
        <div>  
         <div className='card-title h3 text-center'>Unidades: {varunidades}</div>
      
        </div>
  
      )
}



export default CantidadPokemonHooks;