import { FETCH_PRODUCTS, FETCH_PRODUCTS_PAGE,FETCH_PRODUCTS_DETAILS } from "./Types";

const intState = [];

const ProductsReducer = (state = intState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case FETCH_PRODUCTS_PAGE:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const ProductDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_DETAILS:
      return action.payload;
    default:
      return state = [];
  }
};

export { ProductsReducer, ProductDetailsReducer };