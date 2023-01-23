import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    progressStore: false,
  },
  reducers: {
    setReduxProgress: (state, action) => {
      state.progressStore = action.payload;
    },
    resetReduxProgress: (state) => {
      state.progressStore = false;
    },
  },
});

export const { setReduxProgress, resetReduxProgress } = progressSlice.actions;
export default progressSlice.reducer;
