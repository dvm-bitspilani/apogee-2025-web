import { createSlice } from "@reduxjs/toolkit";

const experienceAnimationsSlice = createSlice({
  name: "experienceAnimations",
  initialState: {
    isIntroComplete: false,
  },
  reducers: {
    toggleIntroCompletion: (state) => {
      state.isIntroComplete = !state.isIntroComplete;
    },
  },
});

export const experienceAnimationsActions = experienceAnimationsSlice.actions;

export default experienceAnimationsSlice.reducer;
