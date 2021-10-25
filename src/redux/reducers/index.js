import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart/cart";
export default combineReducers({
  currentUser: userReducer,
  cart: cartReducer,
});
