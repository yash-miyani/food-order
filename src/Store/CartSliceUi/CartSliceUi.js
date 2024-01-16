import { createSlice } from "@reduxjs/toolkit";

const cartSliceUi = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUiActions = cartSliceUi.actions;
export default cartSliceUi;
