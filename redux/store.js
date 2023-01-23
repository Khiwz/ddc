import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import progressReducer from "./progressSlice";
import selectedCardReducer from "./selectedCardSlice";

export default configureStore({
  reducer: {
    language: languageReducer,
    progress: progressReducer,
    selectedCard: selectedCardReducer,
  },
});
