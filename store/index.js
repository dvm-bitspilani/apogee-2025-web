import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice/counterSlice.js";
import experienceAnimationsSlice from "./experienceAnimationsSlice/experienceAnimationsSlice.js";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    experienceAnimations: experienceAnimationsSlice,
  },
});

export default store;
