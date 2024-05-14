import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

interface IProductInitialState {
  error: null | string;
  loading: boolean;
  products: API.Product[];
}

const initialState: IProductInitialState = {
  loading: false,
  error: null,
  products: [],
};

export const fetchAllProducts = createAsyncThunk(
  "products/getAll",
  async () => {
    try {
      //   const response = await window.fetch("www.api.domain.com/products");
      //   const data = await response.json(); // [{ }]
      return products;
    } catch (e) {
      const err = e as { message: string };
      throw new Error(err.message);
    }
  },
);

export const fetchProduct = createAsyncThunk(
  "products/getAll",
  async (id: string) => {
    try {
      //   const response = await window.fetch("www.api.domain.com/products/${id}");
      //   const data = await response.json(); // [{ }]
      return products;
    } catch (e) {
      const err = e as { message: string };
      throw new Error(err.message);
    }
  },
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchAllProducts.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.error.message;
      console.error({ action });
    });

    builder.addCase(fetchAllProducts.fulfilled, (state, action: any) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
  },
});

export default productSlice.reducer;
