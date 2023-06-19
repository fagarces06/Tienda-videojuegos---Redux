import { combineReducers } from "redux";
import game_shop from "./gameShopReducers";

const rootRedcuers=combineReducers({
    game_shop,
   // console_reducer
});

export default rootRedcuers;