import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartLike: [],
  totalLikes: 0,
};

const likeSlice = createSlice({
  name: "like",
  initialState: initialState,
  reducers: {
    addLike(state, action) {
      const newItemLike = action.payload;
      const existingItemLike = state.cartLike.find(
        (item) => item.id === newItemLike.id
      );

      if (!existingItemLike) {
        state.totalLikes++;
        state.cartLike.push({
          id: newItemLike.id,
          title: newItemLike.title,
          image01: newItemLike.image01,
          price: newItemLike.price,
          isLike: true,
          totalPrice: newItemLike.price,
        });
      } else {
        state.totalLikes--;
        existingItemLike.isLike = false;
        state.cartLike = state.cartLike.filter(
          (el) => el.id !== newItemLike.id
        );
      }
    },
  },
});

export const likeActions = likeSlice.actions;

export default likeSlice;
