import { createSlice } from "@reduxjs/toolkit";

const likeSliceUi = createSlice({
  name: "likeUi",
  initialState: { LikeVisible: false },

  reducers: {
    LikeToggle(state) {
      state.LikeVisible = !state.LikeVisible;
    },
  },
});

export const likeUiActions = likeSliceUi.actions;
export default likeSliceUi;
