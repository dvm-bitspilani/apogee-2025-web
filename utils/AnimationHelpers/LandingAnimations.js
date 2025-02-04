import { demoSheet } from "../../components/Experience/Experience";

export const animationPlayerHelper = (
  startPos,
  duration,
  direction = "normal"
) => {
  demoSheet.sequence.position = startPos;
  demoSheet.sequence.play({ iterationCount: 1, direction: direction });
  const animationTimeout = setTimeout(() => {
    demoSheet.sequence.pause();
  }, duration * 1000);

  return animationTimeout;
};

export const playIntro = () => {
  return animationPlayerHelper(0, 5.5, "normal");
};

export const landingToContact = () => {
  return animationPlayerHelper(6, 2, "normal");
};

export const contactToLanding = () => {
  return animationPlayerHelper(8, 2, "reverse");
};

export const landingToEvents = () => {
  return animationPlayerHelper(9, 2, "normal");
};

export const eventsToLanding = () => {
  return animationPlayerHelper(11, 2, "reverse");
};
