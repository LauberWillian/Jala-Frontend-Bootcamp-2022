import { addProduct } from "../reducer/shopReducer";

export const loadProductsThunk = () => async (dispatch, getState) => {
  try {
    const response = await fetch("http://localhost:5289/api/Products");
    const products = await response.json();
    console.log("%c%s", "color: black", products);
    dispatch(addProduct(products));
  } catch (error) {
    console.log("Error on load products:", error);
  }
};
