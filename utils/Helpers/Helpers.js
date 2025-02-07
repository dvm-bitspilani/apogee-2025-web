import {
  curStageUpdate,
  experienceAnimationsActions,
} from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";

export const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes("safari") && !ua.includes("chrome");
};

export const setNavigationStage = (
  dispatch,
  name,
  dur1 = 0,
  animationDur = 2000
) => {
  dispatch(experienceAnimationsActions.setAnimationStage(name));
  dispatch(curStageUpdate(name, dur1, animationDur));
};
