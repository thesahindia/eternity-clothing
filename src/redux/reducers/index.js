import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart/cart";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key:"root",
  storage,
  whitelist: ['cart']

}
const rootReducer = combineReducers({
  currentUser: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer)