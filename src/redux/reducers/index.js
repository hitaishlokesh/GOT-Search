import { combineReducers } from "redux";
import { productsReducer } from "./GotReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
});
export default reducers;
