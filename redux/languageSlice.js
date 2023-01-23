import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    languageStore: "english",
  },
  reducers: {
    setReduxLanguage: (state, action) => {
      state.languageStore = action.payload;
    },
    resetReduxLanguage: (state) => {
      state.languageStore = null;
    },
  },
});

export const { setReduxLanguage, resetReduxLanguage } = languageSlice.actions;
export default languageSlice.reducer;
