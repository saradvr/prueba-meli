import { AppDispatch } from "./index";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const getProducts = (q: string) => {
  return async function (dispatch: AppDispatch) {
    dispatch({ type: productSlice.actions.loading });
    try {
      const { data } = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/api/items?q=${q}`,
      });
      dispatch({
        type: productSlice.actions.successProducts,
        payload: data.searchResult,
      });
    } catch (error: unknown) {
      dispatch({ type: productSlice.actions.error, payload: error });
    } finally {
      dispatch({ type: productSlice.actions.finished });
    }
  };
};

export const getProduct = (productId: string) => {
  return async function (dispatch: AppDispatch) {
    dispatch({ type: productSlice.actions.loading });
    try {
      const { data } = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/api/items/${productId}`,
      });
      dispatch({
        type: productSlice.actions.successProduct,
        payload: data.item.item,
      });
    } catch (error: unknown) {
      dispatch({ type: productSlice.actions.error, payload: error });
    } finally {
      dispatch({ type: productSlice.actions.finished });
    }
  };
};

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: {
      author: {
        name: "",
        lastname: "",
      },
      categories: [],
      items: [],
    },
    product: {
      id: "",
      title: "",
      price: {
        currency: "",
        amount: 0,
      },
      picture: "",
      condition: "",
      free_shipping: false,
    },
    error: {},
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    successProducts: (state, action) => {
      state.products = action.payload;
    },
    successProduct: (state, action) => {
      state.product = action.payload;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    finished: (state) => {
      state.loading = false;
    },
  },
});

export const { loading, successProducts, successProduct, error } =
  productSlice.actions;

export default productSlice.reducer;
