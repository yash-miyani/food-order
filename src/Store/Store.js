import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice/CartSlice";
import cartSliceUi from "./CartSliceUi/CartSliceUi";
import likeSlice from "./LikeSlice/LikeSlice";
import likeSliceUi from "./LikeSlice/LikeSliceUi";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartSliceUi.reducer,
    like: likeSlice.reducer,
    likeUi: likeSliceUi.reducer,
  },
});

export default store;
