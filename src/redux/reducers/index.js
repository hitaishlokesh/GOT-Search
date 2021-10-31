import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./GotReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
