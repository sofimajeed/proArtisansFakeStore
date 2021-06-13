import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, cartsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  allCarts:cartsReducer,
  product: selectedProductsReducer,
});
export default reducers;
