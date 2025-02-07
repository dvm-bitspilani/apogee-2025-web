import { createSlice } from "@reduxjs/toolkit";

const experienceAnimationsSlice = createSlice({
  name: "experienceAnimations",
  initialState: {
    animationStage: "intro",
    curStage: "landing",
  },
  reducers: {
    setAnimationStage: (state, action) => {
      state.animationStage = action.payload;
    },
    setCurStage: (state, action) => {
      state.curStage = action.payload.split("To")[1].toLowerCase();
    },
  },
});

export const experienceAnimationsActions = experienceAnimationsSlice.actions;

// ASYNC ACTIONS

export const curStageUpdate = (stage) => {
  return async (dispatch, dur1 = 0, animationDur = 2000) => {
    if (stage.split("To")[1].toLowerCase() === "landing") {
      setTimeout(() => {
        dispatch(experienceAnimationsActions.setCurStage(stage));
      }, dur1);
    } else {
      setTimeout(() => {
        dispatch(experienceAnimationsActions.setCurStage(stage));
      }, animationDur);
    }
  };
};

export default experienceAnimationsSlice.reducer;
