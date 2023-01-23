import { createSlice } from "@reduxjs/toolkit";

const selectedCardSlice = createSlice({
  name: "selectedCard",
  initialState: {
    selectedCardStore: "",
  },
  reducers: {
    setReduxSelectedCard: (state, action) => {
      state.selectedCardStore = action.payload;
    },
    resetReduxSelectedCard: (state) => {
      state.selectedCardStore = null;
    },
  },
});

export const { setReduxSelectedCard, resetReduxSelectedCard } =
  selectedCardSlice.actions;
export default selectedCardSlice.reducer;
