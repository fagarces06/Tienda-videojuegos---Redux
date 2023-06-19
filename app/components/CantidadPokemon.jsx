import React from "react"
import { ReactDOM } from "react"
import { connect } from "react-redux"

 class CantidadPokemon extends React.Component {
    render() {
      
    //  const {m1,m2}=this.props.alerts;
    
      return (
        <div>  
         <div className='card-title h3 text-center'>Unidades: {this.props.game_shop.pokemon} </div>
      
        </div>
  
      )
    }
  }

  const mapStateToProps=(state)=>{
    return{
        game_shop: state.game_shop
    }
  }

  export default connect(mapStateToProps)(CantidadPokemon);