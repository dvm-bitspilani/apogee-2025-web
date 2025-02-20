import { createSlice } from "@reduxjs/toolkit";

const experienceAnimationsSlice = createSlice({
  name: "experienceAnimations",
  initialState: {
    animationStage: "intro",
    curStage: "landing",
    // isLoading: true,
    isPointerEventsAllowed: false,
    isUserUnfocusAtPreloader: false,
  },
  reducers: {
    setAnimationStage: (state, action) => {
      state.animationStage = action.payload;
    },
    setCurStage: (state, action) => {
      if (action.payload === "landing") {
        state.curStage === action.payload;
      } else {
        state.curStage = action.payload.split("To")[1].toLowerCase();
      }
    },
    resetState: (state, action) => {
      state.animationStage = "intro";
      state.curStage = "landing";
      // state.isLoading = true;
      state.isPointerEventsAllowed = false;
    },
    // toggleIsLoading: (state) => {
    //   state.isLoading = !state.isLoading;
    // },
    toggleIsPointerEventsAllowed: (state) => {
      state.isPointerEventsAllowed = !state.isPointerEventsAllowed;
    },
    toggleIsUserUnfocusAtPreloader: (state) => {
      state.isUserUnfocusAtPreloader = !state.isUserUnfocusAtPreloader;
    },
  },
});

export const experienceAnimationsActions = experienceAnimationsSlice.actions;

// ASYNC ACTIONS

export const curStageUpdate = (stage, dur1 = 0, animationDur = 2000) => {
  return async (dispatch) => {
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

export const setNavigationStage = (stage, dur1 = 0, animationDur = 2000) => {
  return async (dispatch) => {
    dispatch(experienceAnimationsActions.setAnimationStage(stage));
    dispatch(curStageUpdate(stage, dur1, animationDur));
  };
};

export const reverseAnimation = (animationStage) => {
  return async (dispatch) => {
    if (animationStage === "landingToContact") {
      dispatch(setNavigationStage("contactToLanding"));
    } else if (animationStage === "landingToEvents") {
      dispatch(setNavigationStage("eventsToLanding"));
    } else if (animationStage === "landingToSpeakers") {
      dispatch(setNavigationStage("speakersToLanding"));
    } else if (animationStage === "landingToAbout") {
      dispatch(setNavigationStage("aboutToLanding"));
    }
  };
};

export default experienceAnimationsSlice.reducer;
