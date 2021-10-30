import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart/cart";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import collectionReducer from "./collection/collection-reducer";

const persistConfig = {
  key:"root",
  storage,
  whitelist: ['cart']

}
const rootReducer = combineReducers({
  currentUser: userReducer,
  cart: cartReducer,
  collections: collectionReducer
});

export default persistReducer(persistConfig, rootReducer)