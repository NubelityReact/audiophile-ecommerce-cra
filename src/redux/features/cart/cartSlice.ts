import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartItems {
  product: API.Product;
  amount: number;
}

interface ICartState {
  products: ICartItems[];
  totalItems: number;
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
}

const initialState: ICartState = {
  products: [],
  shipping: 0,
  totalItems: 0,
  subtotal: 0,
  total: 0,
  vat: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItems>) => {
      const {
        amount,
        product: { id, price },
      } = action.payload;

      const newItem: ICartItems = {
        product: action.payload.product,
        amount,
      };

      const isAlreadyOnList = Boolean(
        state.products.find((item) => item.product.id === id),
      );

      if (isAlreadyOnList) {
        state.products = state.products.map((item) => {
          if (item.product.id === id) {
            return {
              ...item,
              amount: item.amount + amount,
            };
          } else {
            return item;
          }
        });
      } else {
        state.products.push(newItem);
      }

      state.totalItems += amount;
      state.subtotal += price * amount;
      state.vat += price * 0.16 * amount;
      state.vat = Number(state.vat.toFixed(2));
      state.shipping = 50;
      state.total = state.shipping + state.subtotal + state.vat;
    },
    removeProducts: (state, action: PayloadAction<ICartItems>) => {
      const {
        payload: { product, amount },
      } = action;

      const item = state.products.find(
        (productQuantity) => productQuantity.product.id === product.id,
      );

      if (item) {
        const newQuantity = item.amount - amount;
        if (newQuantity < 1) {
          state.products = state.products.filter(
            (item) => item.product.id !== product.id,
          );
        } else {
          state.products = state.products.map((item) => {
            if (item.product.id === product.id) {
              return {
                ...item,
                amount: newQuantity,
              };
            }

            return item;
          });
        }
      }

      state.totalItems -= amount;
      state.subtotal -= amount * product.price;
      state.vat = state.vat - amount * product.price * 0.16;
      state.shipping = state.totalItems < 1 ? 0 : state.shipping;
      state.total = state.shipping + state.subtotal + state.vat;
    },
    removeAll: (state) => {
      state.products = [];
      state.shipping = 0;
      state.subtotal = 0;
      state.totalItems = 0;
      state.vat = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProducts, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
