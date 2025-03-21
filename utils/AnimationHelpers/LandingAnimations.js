import { landingSheet } from "../../components/Experience/Experience";

export const animationPlayerHelper = (
  startPos,
  duration,
  direction = "normal"
) => {
  landingSheet.sequence.position = startPos;
  landingSheet.sequence.play({ iterationCount: 1, direction: direction });
  const animationTimeout = setTimeout(() => {
    landingSheet.sequence.pause();
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

export const landingToSpeakers = () => {
  return animationPlayerHelper(12, 2, "normal");
};

export const speakersToLanding = () => {
  return animationPlayerHelper(14, 2, "reverse");
};

export const landingToAbout = () => {
  return animationPlayerHelper(15, 2, "normal");
};

export const aboutToLanding = () => {
  return animationPlayerHelper(17, 2, "reverse");
};
