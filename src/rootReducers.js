import { combineReducers } from "redux";
import { ProductsReducer, ProductDetailsReducer } from "./services/Reducers.js";

const rootReducer = combineReducers({
  allProducts: ProductsReducer,
  ProductDetails: ProductDetailsReducer,
});

export default rootReducer;
