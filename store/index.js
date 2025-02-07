import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice/counterSlice.js";
import experienceAnimationsSlice from "./experienceAnimationsSlice/experienceAnimationsSlice.js";
import routeSlice from "./routeSlice/routeSlice.js";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    experienceAnimations: experienceAnimationsSlice,
    routes: routeSlice,
  },
});

export default store;
