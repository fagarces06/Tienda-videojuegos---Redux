import React from "react"
import { ReactDOM } from "react"
import { connect } from "react-redux"
import { buy_pokemon_action, return_pokemon_action } from "../redux/actions/gameShopActions"

 class ComprarPokemon extends React.Component {
    render() {
      
    //  const {m1,m2}=this.props.alerts;
    console.log("las props son:",this.props)
      return (
        <div>  
                <button type="button" className="btn btn-dark btn-sm mb-2" onClick={()=>{
                    this.props.buy_pokemon_action(1);
                }}>comprar pokemon</button>
                  <button type="button" className="btn btn-dark btn-sm "onClick={()=>{
                    this.props.return_pokemon_action(1);
                  }}>Regresar Pokemon</button>
      
        </div>
  
      )
    }
  }

const mapDispatchToprops={
    buy_pokemon_action,
    return_pokemon_action
}



  export default connect(null,mapDispatchToprops)(ComprarPokemon);