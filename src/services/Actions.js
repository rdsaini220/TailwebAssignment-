import { FETCH_PRODUCTS, FETCH_PRODUCTS_PAGE,FETCH_PRODUCTS_DETAILS } from "./Types";

const ApiUrl = "https://gorest.co.in/public-api/";

const fetchProducts = () => {
  return (dispatch) => {
    fetch(`${ApiUrl}products`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_PRODUCTS, payload: data.data });
      });
  };
};

const fetchProductsPage = (page) => {
  return (dispatch) => {
    fetch(`${ApiUrl}products?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_PRODUCTS_PAGE, payload: data.data });
      });
  };
};

const fetchProductDetails = (id) => {
   return (dispatch) => {
     fetch(`${ApiUrl}products/${id}`)
       .then((response) => response.json())
       .then((data) => {
         dispatch({ type: FETCH_PRODUCTS_DETAILS, payload: data });
       });
   };
};

export { fetchProducts,fetchProductsPage, fetchProductDetails };
