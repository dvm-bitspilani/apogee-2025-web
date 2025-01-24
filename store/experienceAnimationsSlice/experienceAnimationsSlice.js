import { createSlice } from "@reduxjs/toolkit";

const experienceAnimationsSlice = createSlice({
  name: "experienceAnimations",
  initialState: {
    animationStage: "intro",
  },
  reducers: {
    setAnimationStage: (state, action) => {
      state.animationStage = action.payload;
    },
  },
});

export const experienceAnimationsActions = experienceAnimationsSlice.actions;

export default experienceAnimationsSlice.reducer;
