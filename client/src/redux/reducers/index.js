import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart/cart";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import collectionReducer from "./collection/collection-reducer";
import productReducer from "./product/product-reducer";

const persistConfig = {
  key:"root",
  storage,
  whitelist: ['cart']

}

const rootReducer = combineReducers({
  currentUser: userReducer,
  cart: cartReducer,
  collectionsData: collectionReducer,
  productsData: productReducer
});

export default persistReducer(persistConfig, rootReducer)